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
    AlertDialogOverlay,
  SimpleGrid } from '@chakra-ui/react';
import AdminHeader from "./AdminHeader";

export default function AdminProducts() {

    const [games, setGame] = useState([])

  useEffect(() =>{
    axios.get('https://nokler-api.herokuapp.com/allGames')
    .then((response) =>{
      setGame(response.data)
        })
    }, [games])

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
          {/* <Button colorScheme='red' onClick={deleteGame(deleteId)} ml={3}>
            Delete
          </Button> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogOverlay>
  </AlertDialog>



    <Container  w='950px'>
      <Box>
      <AdminHeader />
      <Flex flexDirection='row' alignItems='center' justifyContent='space-between'>
      <Text fontSize='30px' mb='15px' mt='15px'>Manage Games</Text>
      <Button h='25px' mr='10px'  mt='3px'><Link href='/addgame'>Add New Game +</Link></Button>
      </Flex>
      
      <Divider mb='15px' mt='10px'/>
      </Box>

      <FormControl>
          <Input  id='searchGame' type='text' borderRadius='20px' mb='15px' placeholder='Type the game name...'></Input>
      </FormControl>

      <SimpleGrid mt='30px' columns={2} spacing={3}>
     
     { games ? games.map((g) => (
        <AdminCard
          key={g.id}
          id={g.id}
          genres={g.genres}
          name={g.name}
          image={g.img}
          price={g.price}
          buttonlink={'/edit-game/'+ g.name}
          buttontext='Edit game'
          
        />
      )): 'Loading..'}

    
    </SimpleGrid>

    </Container>
    </>
  );
}
