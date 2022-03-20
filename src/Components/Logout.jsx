import React from "react";
import { Button } from '@chakra-ui/react';
import { useAuth0 } from "@auth0/auth0-react";
import { FaSignOutAlt } from "react-icons/fa";


export const Logout = () => {
  const { logout } = useAuth0();

  return <Button size="sm"
  mt="20px"
  ml="14px"
  border='none' onClick={() => logout()}><FaSignOutAlt size='18' /></Button>;
};
