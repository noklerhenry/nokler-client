import React, { useState, useEffect } from "react";
import AdminCard from "./AdminCard";
import axios from "axios";
import { Heading, Container, Text, FormControl, Box,  Divider, Input, Button, SimpleGrid } from '@chakra-ui/react'
import AdminHeader from "./AdminHeader";


export default function AddGame() {

  const [search, setSearch] = useState('')
  const [games, setGame] = useState()

  console.log(search)
  let handleInputChange = (e) => {
    e.preventDefault();
      setSearch(e.target.value)}

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.value)
} 

useEffect(() =>{
if(search.length > 2){
    axios.get('https://nokler-api.herokuapp.com/gameSearchApi?name=' + search)
  .then((response) =>{
    setGame(response.data)
  })
}
}, [search])


console.log(games)



return (
    <>
    <Container p='8'>
    <AdminHeader />
    <Text fontSize='30px' mb='15px' mt='15px'>Add Games</Text>
    <FormControl mt='25px' onSubmit={() =>handleSubmit()}>
    <Input id='searchGame' type='text' borderRadius='20px' mb='15px' placeholder='Type the game name...' value={search} onChange={handleInputChange}/>
       
    </FormControl>
    <SimpleGrid mt='30px' columns='2' spacing='3'>
     {games instanceof Array ? 
     
     <>{games?.map((g) => (
        <AdminCard
          key={g.id}
          id={g.id}
          genres={g.genres}
          name={g.name}
          image={g.img}
          price={g.price}
          buttontext='Add game'
          buttonlink={'/add-product/'+ g.id}
        />
      ))}</> : 

      <Text color='#777777'>Waiting for search...</Text>
    }  
    </SimpleGrid>

    </Container>
    </>
)
}