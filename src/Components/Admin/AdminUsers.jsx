import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useEffect } from "react";
import axios from 'axios'
import { Heading, Button, Text, Container, Box, Divider, Link } from '@chakra-ui/react'

export default function AdminUsers() {

  let gamesList = useSelector((state) => state.games)

    const [game, setGame] = useState('')
    const [user, setUser] = useState('')

  useEffect(() =>{
    axios.get('http://localhost:3000/api/?game=' + game)
    .then((response) =>{
      setGame(response.data)
    })

    axios.get('http://localhost:3000/api/?user=' + user)
    .then((response) =>{
        setUser(response.data)
    })

    return() => {
        setGame(null)
    }
}, [game])

  return (
    <Container p='8'>
      <Box>
      <Heading mb='20px'>Welcome, Admin</Heading>
      <Button h='25px' mr='10px'><Link href='/admin'>Back to Admin panel</Link></Button>
      <Text fontSize='30px' mb='15px' mt='15px'>Manage Users</Text>
      <Divider mb='15px'/>
      </Box>

    </Container>
  );
}
