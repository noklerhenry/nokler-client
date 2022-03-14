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
    AlertDialogOverlay, } from '@chakra-ui/react';
import AdminHeader from "./AdminHeader";

export default function AdminProducts() {

    const [games, setGame] = useState([])

  useEffect(() =>{
    axios.get('https://nokler-api.herokuapp.com/getProducts')
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
          {/* <Button colorScheme='red' onClick={deleteGame(deleteId)} ml={3}>
            Delete
          </Button> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogOverlay>
  </AlertDialog>



    <Container p='8'>
      <Box>
      <AdminHeader />
      <Text fontSize='30px' mb='15px' mt='15px'>Manage Games</Text>
      <Button h='25px' mr='10px'  mt='10px'><Link href='/addgame'>Add New Game</Link></Button>
      
      <Divider mb='15px'/>
      </Box>

      <FormControl>
          <Input  id='searchGame' type='text' borderRadius='20px' mb='15px' placeholder='Type the game name...'></Input>
      </FormControl>

      <Box mt='30px'>
     
     { (games.length > 2) ? games.data.map((g) => (
        <AdminCard
          key={g.game.id}
          id={g.game.id}
          genres={g.game.genres}
          name={g.game.name}
          image={g.game.image}
          price={g.price}
          buttonlink={'/edit-game/'+ g.id}
          buttontext='Edit game'
          buttondelete={<Button h='25px' mt='10px' colorScheme='red' onClick={() => deleteClick(g.id)}>Delete</Button>}
          
        />
      )): 'Loading..'}

    
    </Box>

    </Container>
    </>
  );
}
