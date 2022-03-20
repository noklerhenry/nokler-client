import React, { useState } from "react";
//import { Link } from "react-router-dom";
//import { useSelector } from 'react-redux'
import { useEffect } from "react";
import axios from 'axios'
import { Heading, Button, Text, Container, Box, Divider, Switch, Flex } from '@chakra-ui/react'
import AdminHeader from "./AdminHeader";

export default function AdminUsers() {


    const [usuarios, setUsers] = useState({})
   // const [user, setUser] = useState('')

  useEffect(() =>{
    axios.get('https://nokler-api.herokuapp.com/users')
    .then((response) =>{
      setUsers(response.data.users)
    })
}, [usuarios])

function changeStatus(id, enable){
  if(enable == true){
  axios.put('https://nokler-api.herokuapp.com/users/' + id, {enable: false})
  return alert('User Disable')
  } else if(enable == false){
    axios.put('https://nokler-api.herokuapp.com/users/' + id, {enable: true})
    return alert('User Enabled')

  }
}

console.log(usuarios)

  return (
    <Container w='90%'>
      <Box>
      <AdminHeader />
      <Text fontSize='30px' mb='15px' mt='15px'>Manage Users</Text>
      <Divider mb='15px'/>
      </Box>

      <Box>
      {usuarios.length > 1 ? usuarios.map((u) =>
      <>
        <Flex  borderBottom='1px #444444 dotted' padding='20px 0px' flexDirection='row' justifyContent='space-between' alignContent='left' key={u.id}>
        <Text float='left' borderRadius='20px' bg='#8c06f7' color='white' padding=' 4px 6px' h='30px' w='30px' mr='5px' textAlign='center'>{u.id}</Text>
        <Text fontWeight='700' textAlign='left'>{u.email}</Text>
          <Box float='left'>
           
          {u.enable ? 
          <Button bg='red' color='white' h='25px' border='none' fontSize='13px' onClick={() =>changeStatus(u.id, u.enable)}>Disable</Button>
        :
        <Button bg='green' color='white' h='25px' border='none' fontSize='13px' onClick={() =>changeStatus(u.id, u.enable)}>Enable</Button>
        }
          
          </Box>
        </Flex>
      </>
      ) : 'loading'
    }
      </Box>

    </Container>
  );
}
