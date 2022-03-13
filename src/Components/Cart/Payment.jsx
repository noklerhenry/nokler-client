import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KbQVvKlOgZYCviaYwkeNp6v1KoWDjCXkBlDNnlKNg5nw0faA35sFUuOwq7GLX6BdLiX6ADpimsjDHGRYUElEolJ00VMm8GEG6"
);

export const Payment = ({ amount }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount} />
    </Elements>
  );
};
