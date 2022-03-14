import React from "react";
//import { useSelector } from "react-redux";
//import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import axios from "axios";
import { SimpleGrid, Heading } from "@chakra-ui/react";

export const Cards = () => {
  //const games = useSelector((state) => state.games);

  const [games, setGame] = useState('')

  useEffect(() =>{
    axios.get('https://nokler-api.herokuapp.com/allGames')
    .then((response) =>{
      setGame(response.data)
    })
  }, [])

  console.log(games)
  return (
    <>
      <Heading fontSize="55px" fontWeight="300" ml="10px" mb='30px'>
        LATEST GAMES
      </Heading>
      <SimpleGrid
        minChildWidth="250px"
        spacing="60px"
        backgroundImage=' linear-gradient(0deg, transparent 24%, rgba(140, 6, 247, .09) 25%, rgba(140, 6, 247, .09) 26%, transparent 27%, transparent 74%, rgba(140, 6, 247, .09) 75%, rgba(140, 6, 247, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(140, 6, 247, .09) 25%, rgba(140, 6, 247, .09) 26%, transparent 27%, transparent 74%, rgba(140, 6, 247, .09) 75%, rgba(140, 6, 247, .09) 76%, transparent 77%, transparent)' backgroundSize='25px 25px'   >
        {games ? games.map((g) => (
          <Card
            key={g.id}
            id={g.id}
            genres={g.genres}
            name={g.name}
            image={g.img}
            // price={g.price}
            platform={g.platform}
            productKey={g.productKey}
          />
        )) : 'Loading...' }
      </SimpleGrid>
    </>
  );
};
