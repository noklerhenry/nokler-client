import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KZSeoFbNejxpP0o7FC6jPKusjieRGmz4B1lomRBENEjOiYYAIt649QdomCDfJmDmHAefktKGEwIFEBWhxtJdErj002tXqFJL9"
);

export const Payment = ({ amount }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount} />
    </Elements>
  );
};
