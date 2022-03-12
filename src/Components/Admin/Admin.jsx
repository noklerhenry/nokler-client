import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useEffect } from "react";
import axios from 'axios'
import { Heading, Button, Text, Container, Box, Stat,
  StatLabel,  StatNumber,  StatHelpText,  StatArrow,  StatGroup, Divider, Link } from '@chakra-ui/react'

export default function Admin() {

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
      <Button h='25px' mr='10px'><Link href='/admin-products'>Manage Products</Link></Button>
      <Button h='25px'><Link href='/admin-users'>Manage Users</Link></Button>

      <Text fontSize='30px' mb='15px' mt='15px'>Platform Stats</Text>
      <Divider mb='15px'/>
      <StatGroup>
  <Stat>
    <StatLabel>Sent</StatLabel>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>Clicked</StatLabel>
    <StatNumber>45</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>
</StatGroup>
      </Box>

    </Container>
  );
}
