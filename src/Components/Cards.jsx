import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";
import  { SimpleGrid, Heading } from "@chakra-ui/react";

export const Cards = () => {
  const games = useSelector((state) => state.games);
  
  return (
    <>
    <Heading fontSize='55px' fontWeight='300' ml='10px'>LATEST GAMES</Heading>
    <SimpleGrid minChildWidth='250px' spacing='40px' backgroundImage=' linear-gradient(0deg, transparent 24%, rgba(140, 6, 247, .09) 25%, rgba(140, 6, 247, .09) 26%, transparent 27%, transparent 74%, rgba(140, 6, 247, .09) 75%, rgba(140, 6, 247, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(140, 6, 247, .09) 25%, rgba(140, 6, 247, .09) 26%, transparent 27%, transparent 74%, rgba(140, 6, 247, .09) 75%, rgba(140, 6, 247, .09) 76%, transparent 77%, transparent)' backgroundSize='24px 24px'>
      {games.map((g) => (
        <Card
          key={g.id}
          id={g.id}
          name={g.name}
          image={g.image}
          price={g.price}
        />
      ))}
    </SimpleGrid>
    </>
  );
};
