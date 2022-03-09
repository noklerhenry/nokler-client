import React from "react";
import { Button } from '@chakra-ui/react';
import { useAuth0 } from "@auth0/auth0-react";

export const Logout = () => {
  const { logout } = useAuth0();

  return <Button size='sm' mt='20px' ml='9px' onClick={() => logout()}>Logout</Button>;
};
