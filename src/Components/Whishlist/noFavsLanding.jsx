import { Link } from 'react-router-dom';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack
} from "@chakra-ui/react";

const Landing = () => {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Start looking for <br />
            <Text as={"span"} color={"pink.400"}>
              your next games
            </Text>
          </Heading>
          <Text color={"gray.500"}>They are waiting for you...</Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Link to='/'>
              <Button rounded={"full"} px={6}>
                Get Started
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default Landing;
