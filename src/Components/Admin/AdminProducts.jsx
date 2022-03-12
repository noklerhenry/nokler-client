import React, { useState, useRef } from "react";
//import { Link } from "react-router-dom";
//import { useSelector } from 'react-redux'
import { useEffect } from "react";
import axios from 'axios'
import AdminCard from "./AdminCard";
import { Heading, Button, Text, Container, Box, Divider, Link, Flex, FormControl, Input, AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay, } from '@chakra-ui/react'

export default function AdminProducts() {

    const [games, setGame] = useState('')

  useEffect(() =>{
    axios.get('https://nokler-api.herokuapp.com/AllGames')
    .then((response) =>{
      setGame(response.data)
    })

    // return() => {
    //     setGame(null)
    // }
}, [])

console.log(games)
    
const [deleteId, setdeleteId] = useState()

const [isOpen, setIsOpen] = useState(false)
const onClose = () => setIsOpen(false)
const cancelRef = useRef()


function deleteClick(id){
setIsOpen(true);
setdeleteId(id)
}

function deleteGame(id){
    axios.delete('https://nokler-api.herokuapp.com/delete/' + id)
    .then((response) =>{
        console.log('game deleted')
    })
    onClose;
}


  return (
      <>
    <AlertDialog
    isOpen={isOpen}
    leastDestructiveRef={cancelRef}
    onClose={onClose}
  >
    <AlertDialogOverlay>
      <AlertDialogContent>
        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
          Delete Game
        </AlertDialogHeader>

        <AlertDialogBody>
          Are you sure? You can't undo this action afterwards.
        </AlertDialogBody>

        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='red' onClick={deleteGame(deleteId)} ml={3}>
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogOverlay>
  </AlertDialog>



    <Container p='8'>
      <Box>
      <Heading mb='20px'>Welcome, Admin</Heading>
      <Button h='25px' mr='10px'><Link href='/admin'>Back to Admin panel</Link></Button>

        <Flex flexDirection='row' justifyContent='space-between' alignItems='center'>
      <Text fontSize='30px' mb='15px' mt='15px'>Manage Products</Text>
      <Button h='25px' mr='10px'  mt='10px'><Link href='/addgame'>Add New Game</Link></Button>
      </Flex>
      <Divider mb='15px'/>
      </Box>

      <FormControl>
          <Input  id='searchGame' type='text' borderRadius='20px' mb='15px' placeholder='Type the game name...'></Input>
      </FormControl>

      <Box mt='30px'>
     {games.length ? 
     
     <>{games?.map((g) => (
        <AdminCard
          key={g.id}
          id={g.id}
          genres={g.genres}
          name={g.name}
          image={g.img}
          price={g.price}
          buttonlink={'/edit-game/'+ g.id}
          buttontext='Edit game'
          buttondelete={<Button h='25px' mt='10px' colorScheme='red' onClick={() => deleteClick(g.id)}>Delete</Button>}
          
        />
      ))}</> : 

      <p>Loading...</p>

    }  
    </Box>

    </Container>
    </>
  );
}
