import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";


export default function ErrorMessage() {
  return (
    <Box textAlign="center" py={10} px={6} m="10rem 0 5rem 0">
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={"red.500"}
          rounded={"50px"}
          w={"105px"}
          h={"105px"}
          textAlign="center"
        >
          <CloseIcon boxSize={"60px"} color={"white"} />
        </Flex>
      </Box>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        textAlign="center"
        mt="2rem"
      >
        <Text as={"span"} position={"relative"}>
          Ups, something{" "}
        </Text>
        <Text as={"span"} color={"red.500"}>
          went wrong !
        </Text>
      </Heading>
      <Text color={"gray.500"} mt="2rem">
        Verify your payment information and try again, the game is almost yours.{" "}
        <br />
        If the error persists, please{" "}
        <Link to="/contact">
          <strong>contact us.</strong>
        </Link>
      </Text>
      <Box mt="2rem">
        <Link to="/checkout">
          <Button rounded={"full"} px={6}>
            Try Again
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
