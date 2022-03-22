import React from "react";
import { Heading, Button, Text, Container, Box, Link, Divider, useColorMode,   useColorModeValue, Flex } from '@chakra-ui/react'
import { useAuth0 } from "@auth0/auth0-react";


export default function UserOut(){

    const { user, loginWithPopup, loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0();

    const bg = useColorModeValue('#efefef', '#222222')

    return(
        <>
        <Flex mt='180px' flexDirection='column'p={8} justifyContent='center' alignItems='center'>
        <Heading>Wait a minute &#9995; </Heading>
        <Text>If you are logged out, please log in to access.</Text>
        <Button onClick={loginWithPopup} w='200px' h='25px' mt='30px'>Log In</Button>
        </Flex>
        </>

    ) }