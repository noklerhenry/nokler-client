import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";

const GamesResults = (props) => {
  const { thumbnailSrc, name, rating } = props;
  return (
    <>
      <Flex
        width={["150%", "135%", "120%", "105%", "93%", "93%"]}
        h="2.7em"
        p="4px 8px"
        alignItems="center"
        mt="30px"
        borderRadius="20px"
        _hover={{
          //   borderBottom: "2px solid violet",
          cursor: "pointer",
          transition: "0.2s ease-in-out",
          backgroundColor: "none",
          borderRadius: "20px",
        }}
      >
        <Flex w="auto" h="100%" flex="0.4">
          <Image
            src={thumbnailSrc}
            alt="gameImg"
            w="150%"
            h="100%"
            borderRadius="10px"
          />
        </Flex>
        <Box
          as="h3"
          fontSize="15px"
          color="#000"
          ml="10px"
          display="flex"
          flex="2"
          _hover={{ cursor: "pointer", backgroundColor: "none" }}
        >
          {name}
        </Box>
        <Flex
          as="span"
          color="#666666"
          fontSize="16px"
          flex="0.5"
          _hover={{ cursor: "pointer", backgroundColor: "none" }}
          visibility={[
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "visible",
          ]}
        >
          {rating}
        </Flex>
      </Flex>
    </>
  );
};

export default GamesResults;
