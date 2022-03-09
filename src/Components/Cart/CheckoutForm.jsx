import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Container, Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const { isAuthenticated, user } = useAuth0();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: {
          email: user.email,
          name: user.name,
        },
      });

      if (!error) {
        const { data } = await axios.post("http://localhost:3001/checkout", {
          ...paymentMethod,
          amount: amount * 100,
        });
        console.log(data);
      }
      elements.getElement(CardElement).clear();
    } else {
      alert("You have to log in to make the purchase");
    }
  };

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <CardElement />
        <Button background="green.400" color="white" type="submit">
          Buy
        </Button>
      </form>
    </Container>
  );
};
