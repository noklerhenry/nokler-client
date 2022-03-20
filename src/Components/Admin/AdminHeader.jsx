import React from "react";
import { Heading, Button, Text, Container, Box, Link, Divider, useColorMode,   useColorModeValue } from '@chakra-ui/react'
import { useAuth0 } from "@auth0/auth0-react";

export default function AdminHeader(){
    const { user, isAuthenticated, isLoading } = useAuth0();

    const bg = useColorModeValue('#efefef', '#222222')


    return(
        <Container mt='180px' bg={bg} borderRadius='20px' padding='20px' w='90vw'>
        <Box>
        <Text mb='20px' fontSize='19px' fontWeight='400'> Welcome, 
        {isAuthenticated ?  user.name : ' Admin'}</Text>
        <Button h='25px' mr='10px' background={bg}><Link href='/admin-products'>Manage Products</Link></Button>
        <Button h='25px' background={bg}><Link href='/admin-users'>Manage Users</Link></Button>
        </Box>
        </Container>

    )
}