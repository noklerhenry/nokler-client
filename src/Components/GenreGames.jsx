import React from "react";
import { useEffect, useState } from "react";
import { CardG } from "./CardG";
import axios from "axios";
import { SimpleGrid, Heading } from "@chakra-ui/react";

export const GenreGames = () => {

  const [gamesG, setGameG] = useState('')

  useEffect(() =>{
    axios.get('https://nokler-api.herokuapp.com/filterByGenre?genr=Action')
    .then((response) =>{
      setGameG(response.data)
    })
  }, [])

  console.log(gamesG)
  return (
    <>
      <Heading fontSize="55px" fontWeight="300" ml="10px" mb='30px'>
        FEATURED PC GAMES
      </Heading>
      <SimpleGrid
        minChildWidth="250px"
        spacing="60px"
        backgroundImage=' linear-gradient(0deg, transparent 24%, rgba(140, 6, 247, .09) 25%, rgba(140, 6, 247, .09) 26%, transparent 27%, transparent 74%, rgba(140, 6, 247, .09) 75%, rgba(140, 6, 247, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(140, 6, 247, .09) 25%, rgba(140, 6, 247, .09) 26%, transparent 27%, transparent 74%, rgba(140, 6, 247, .09) 75%, rgba(140, 6, 247, .09) 76%, transparent 77%, transparent)' backgroundSize='25px 25px'   >
        {gamesG ? gamesG.map((g) => (
          <CardG
            key={g.id}
            name={g.name}
            image={g.img}
            // price={g.price}
            platform={g.platform}
          />
        )) : 'Loading...' }
      </SimpleGrid>
    </>
  );
};
