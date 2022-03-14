import React, { useEffect, useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { Container, Button, Input, FormLabel } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export const CheckoutForm = ({ amount }) => {
  const cardElementOpts = {
    iconStyle: "solid",
  };
  const [state, setState] = useState({
    city: "",
    line1: "",
    line2: "",
    state: "",
  });
  const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  const { isAuthenticated, user } = useAuth0();

  const validate = () => {
    !state.city ||
    !state.line1 ||
    !state.state
      ? setDisabled(true)
      : setDisabled(false);
  };

  useEffect(() => {
    validate();
  }, [state]);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: {
          address: state,
          email: user.email,
          name: user.name,
        },
      });

      setState({
        city: "",
        line1: "",
        line2: "",
        state: "",
      });

      if (!error) {
        const { data } = await axios.post("https://nokler-api.herokuapp.com/checkOut", {
          ...paymentMethod,
          amount: amount * 100,
        });
        console.log(data);
        alert(data.status);
        // console.log(paymentMethod);
      } else alert(error.message);
      elements.getElement(CardElement).clear();
    } else {
      alert("You have to log in to make the purchase");
    }
  };

  return (
    <Container >
      <form onSubmit={(e) => handleSubmit(e)}>
        <CardElement options={cardElementOpts} />
        <FormLabel mt='30px'>City *</FormLabel>
        <Input
          type="text"
          value={state.city}
          name="city"
          onChange={handleChange}
        />
        <FormLabel>Address line1 *</FormLabel>
        <Input
          type="text"
          value={state.line1}
          name="line1"
          onChange={handleChange}
        />
        <FormLabel>Address line2</FormLabel>
        <Input
          type="text"
          value={state.line2}
          name="line2"
          onChange={handleChange}
        />
        <FormLabel>State *</FormLabel>
        <Input
          type="text"
          value={state.state}
          name="state"
          onChange={handleChange}
        />
        <Button
          background="green.400"
          color="white"
          border='none'
          fontSize='20px'
          mt='20px'
          padding='15px'
          type="submit"
          disabled={disabled}
        >
          Buy
        </Button>
      </form>
    </Container>
  );
};
