import React from "react";
import { Heading, Button, Text, Container, Box, Link, Divider } from '@chakra-ui/react'

export default function AdminHeader(){

    return(
        <Container mt='180px' background='#efefef' borderRadius='20px' padding='20px'>
        <Box>
        <Text mb='20px' fontSize='19px' fontWeight='400'>Welcome, Admin</Text>
        <Button h='25px' mr='10px' background='#efefef'><Link href='/admin-products'>Manage Products</Link></Button>
        <Button h='25px' background='#efefef'><Link href='/admin-users'>Manage Users</Link></Button>
        </Box>
        </Container>

    )
}