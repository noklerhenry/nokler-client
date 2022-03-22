import React from "react";
//import { Link } from "react-router-dom";
//import Filter from "../Filter/Filter";
//import Ordering from "../Ordering/Ordering";
import platforms from "./platforms.png";
import Heroimg from "./hero.png";
import { Box, Flex, Heading, Button, Image, Link } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      w="100%"
      flexDirection="row"
      justifyContent="right"
      alignItems="center"
      paddingTop="60px"
    >
      <Box flexBasis="40%">
        <Heading fontSize="65px" fontWeight="300" lineHeight="60px">
          BUY GAME KEYS
          <br /> FOR ANY PLATFORM
        </Heading>
        <Image mt="20px" mb="20px" src={platforms} alt="platforms" />
        <Button>
          <Link href="/gallery">See all games &#8594;</Link>
        </Button>
      </Box>
      <Box flexBasis="50%">
        <img src={Heroimg} alt="Videogames" width="100%" />
      </Box>
      {/* <div className="filter-order">
                <h4>Personalize your search</h4>
                    <Filter/>
                    <Ordering/>
            </div> */}
    </Flex>
  );
}
