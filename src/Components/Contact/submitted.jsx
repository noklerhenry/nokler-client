import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Submitted({ setSubmitted }) {
  const formAgain = () => {
    setSubmitted(false);
  };
  return (
    <>
      <Container maxW={"3xl"} mt="5rem">
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
            Thanks for <br />
            <Text as={"span"} color={"pink.400"}>
              contacting us !
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            We'll keep in touch shortly <br />
            <strong>Nøkler Team</strong>
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Link to="/">
              <Button rounded={"full"} px={6}>
                Go Back
              </Button>
            </Link>
            <Button
              borderColor={"pink.500"}
              color={"pink.500"}
              rounded={"full"}
              onClick={() => formAgain()}
              _hover={{ bg: "pink.500", color: "#fff" }}
            >
              Another Request
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
