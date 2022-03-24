import { Box, Text, Divider } from "@chakra-ui/react";
import React from "react";
import { Cart } from "./Cart";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const { loginWithPopup, isAuthenticated, isLoading } = useAuth0();
  return (
    <Box mt='180px' mb='100px'>
      <Text fontSize='35px' mb='15px' mt='15px' ml='3%'>Checkout</Text>
      <Divider mb='20px'/>
      <Text fontSize='29px' mb='45px' mt='15px' textAlign='center'>&#x2780; Review your cart</Text>
      <Cart payMethod={true} />
    </Box>
  );
};
