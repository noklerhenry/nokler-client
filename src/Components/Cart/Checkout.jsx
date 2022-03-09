import { Box, Button } from "@chakra-ui/react";
import CartDrawer from "../NavBar/CartDrawer";
import { Logout } from '../Logout';
import React from "react";
import { Cart } from "./Cart";
import { useAuth0 } from "@auth0/auth0-react";

export const Checkout = () => {
  const { loginWithPopup, isAuthenticated, isLoading } = useAuth0()
  return (
    <div>
      <Box d="flex">
        <Box>
          {!isAuthenticated && !isLoading ? (
            <Button size="sm" mt="20px" ml="9px" onClick={loginWithPopup}>
              {" "}
              Sign in
            </Button>
          ) : (
            <Logout />
          )}
          {/* <Button size='sm' mt='20px' onClick={loginWithRedirect}> Sign in</Button> */}
        </Box>
        <Box>{/* <Logout /> */}</Box>
        <Box>
          <CartDrawer />
        </Box>
      </Box>
      <Cart payMethod={true} />
    </div>
  );
};
