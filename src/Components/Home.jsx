import React from "react";
import { Cards } from "./Cards";
import { Box } from "@chakra-ui/react";
import Hero from "./Hero/Hero";
import Latest from "./Latest/Latest";

export const Home = () => {
  return (
    <>
      <Box w="100%" mt="150px">
        <Hero />
      </Box>
      <Box w="95%" mt="80px" alignItems="center" ml="25px">
        <Cards />
      </Box>
      <Box>
        <Latest />
      </Box>
    </>
  );
};
