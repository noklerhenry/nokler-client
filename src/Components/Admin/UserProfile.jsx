import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import { Heading, Container, Text, Box,  Divider, Button, SimpleGrid, Image, useColorMode,   useColorModeValue, Flex  } from '@chakra-ui/react'
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


export default function UserProfile(){
    let email = 'noklerhenry@gmail.com'
    const [usersOrders, setUsersOrders] = useState()

    const bg = useColorModeValue('#efefef', '#222222')

    const { user, isAuthenticated, isLoading } = useAuth0();

    useEffect(() =>{
        axios.get('https://nokler-api.herokuapp.com/getOrders')
      .then((response) =>{
        setUsersOrders(response.data)
        //console.log(response) ;
        })
      }, [])

      console.log(usersOrders)

    return (
        <>
        <Container p='2' mb='50px' mt='180px'>
            <Flex flexDirection='row' justifyContent='space-between' alignContent='center' alignItems='center'  mt='30px' mb='10px'>
                <Image src={user?.picture} alt='user image' w='80px' h='80px' rounded={"full"}></Image>
                <Text mt='20px' fontSize='30px'>Hi, {user?.nickname}</Text>
            </Flex>
            <Divider />
            <Flex flexDirection='row' justifyContent='space-between' alignContent='flex-end' alignItems='center' >
                <Text mt='10px' fontSize='16px' mb='7px' >{user?.email}</Text>
                <Button h='25px' bg={bg} border='none' fontSize='13px'>Edit my profile</Button>

            </Flex>

            <Divider />

            <Text mt='20px' fontSize='25px'>This is your purchase history:</Text>

            {usersOrders?.filter(o => o.userId === 1).map((order) =>(
            <>
            <Flex flexDirection='row' padding='15px' bg={bg} mt='15px' borderRadius='20px' alignItems='center' justifyContent='space-between'>
            <Box >
                <Text fontWeight='700'>{order.game}  </Text>
                <Text>US$ {order.price} </Text>
            </Box>
                <Box>
                <Button bg={bg}  h='20px' fontSize='13px' mr='5px'>Ask for refund</Button>
                <Button bg={bg} h='20px' fontSize='13px'>Re-send key</Button>
                </Box>
            </Flex>
            </>
            
            ))}

        </Container>
        </>
    )
}