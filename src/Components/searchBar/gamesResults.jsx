import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";

const GamesResults = (props) => {
  const { thumbnailSrc, name, rating } = props;
  return (
    <>
      <Flex
        width={["150%", "135%", "120%", "105%", "93%", "93%"]}
        h="2.7em"
        borderBottom="1px solid #d8d8d852"
        p="4px 8px"
        alignItems="center"
        mt="30px"
        _hover={{
          borderBottom: "2px solid violet",
          cursor: "pointer",
          transition: "0.2s ease-in-out",
        }}
      >
        <Flex w="auto" h="100%" flex="0.4">
          <Image src={thumbnailSrc} alt="gameImg" w="150%" h="100%" />
        </Flex>
        <Box
          as="h3"
          fontSize="15px"
          color="#000"
          ml="10px"
          display="flex"
          flex="2"
          _hover={{ cursor: "pointer" }}
        >
          {name}
        </Box>
        <Flex
          as="span"
          color="#a1a1a1"
          fontSize="16px"
          flex="0.5"
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
