import React from "react";
//import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { SimpleGrid, Heading, Spinner } from "@chakra-ui/react";

export const Cards = () => {
  //const games = useSelector((state) => state.games);

  const [games, setGame] = useState("");

  useEffect(() => {
    axios.get("https://nokler-api.herokuapp.com/allGames").then((response) => {
      setGame(response.data);
    });
  }, []);

//   console.log(games);
  return (
    <>
      <Heading fontSize="55px" fontWeight="300" ml="10px" mb="30px">
        LATEST GAMES
      </Heading>
      <SimpleGrid
        minChildWidth="250px"
        columns={{
          base: 1,
          sssm: 1,
          ssm: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 4,
        }}
        // spacing="60px"
        spacingY={{
          base: "200px",
          sssm: "200px",
          ssm: "180px",
          sm: "80px",
          md: "80px",
          lg: "80px",
          xl: "80px",
        }}
        backgroundImage=" linear-gradient(0deg, transparent 24%, rgba(140, 6, 247, .09) 25%, rgba(140, 6, 247, .09) 26%, transparent 27%, transparent 74%, rgba(140, 6, 247, .09) 75%, rgba(140, 6, 247, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(140, 6, 247, .09) 25%, rgba(140, 6, 247, .09) 26%, transparent 27%, transparent 74%, rgba(140, 6, 247, .09) 75%, rgba(140, 6, 247, .09) 76%, transparent 77%, transparent)"
        backgroundSize="25px 25px"
      >
        {games ? (
          games.slice(games.length - 8, games.length).map((g) => (
            <Card
              key={g.id}
              id={g.id}
              genres={g.genres}
              name={g.name}
              image={g.img}
              // price={g.price}
            //   platform={g.platform.map(el => el)}
              productKey={g.productKey}
            />
          ))
        ) : (
          <Spinner />
        )}
      </SimpleGrid>
    </>
  );
};
