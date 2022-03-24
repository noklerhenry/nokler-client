import React from "react";
import { Heading, Button, Text, Container, Box, Link, Flex, useColorMode,   useColorModeValue } from '@chakra-ui/react'
import { useAuth0 } from "@auth0/auth0-react";

export default function AdminHeader(){
    const { user, isAuthenticated, isLoading } = useAuth0();

    const bg = useColorModeValue('#efefef', '#222222')


    return(
        <Flex mt='180px' bg={bg} borderRadius='20px' padding='20px' w='95vw' flexWrap='wrap'>
        <Box>
            <Text mb='20px' fontSize='19px' fontWeight='400'> Welcome, <b>
            {isAuthenticated ?  user.name : ' Admin'}</b> </Text>
            <Button h='25px' mr='10px' background={bg}><Link href='/admin-products'>Manage Products</Link></Button>
            <Button h='25px'  mr='10px' background={bg}><Link href='/admin-users'>Manage Users</Link></Button>
            <Button h='25px' background={bg}><Link href='/refundlist'> Refunds</Link></Button>
        </Box>
        </Flex>

    )
}