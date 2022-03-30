import {
  Container,
  Stack,
  VStack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  Textarea,
  InputLeftElement,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import useForm from "./useForm";
import Submitted from "./submitted";
import useScrollTop from "../useScrollTop";

export default function ContactForm() {
  const { input, submitted, setSubmitted, handlerInputChange, handlerSubmit } = useForm();
  const ScrollToTopOnMount = useScrollTop();
  
  return (
    <>
      <ScrollToTopOnMount />
      {!submitted ? (
        <Container maxW={"7xl"} mt="10rem">
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 18 }}
            direction={{ base: "column", md: "column" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 5 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                textAlign="center"
              >
                <Text as={"span"} position={"relative"}>
                  Doubts or Issues ?
                </Text>
                <br />
                <Text as={"span"} color={"pink.500"}>
                  Contact Us !
                </Text>
              </Heading>
              <Text color={"gray.500"}>
                Describe your problem and our team will provide you immediate
                assistance
              </Text>
            </Stack>
            <Box
              bg={useColorModeValue("white", "gray.700")}
              borderRadius="lg"
              p={8}
              color={useColorModeValue("gray.700", "whiteAlpha.900")}
              shadow="base"
            >
              <form action="submit" onSubmit={handlerSubmit}>
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<BsPerson />} />
                      <Input
                        type="text"
                        name="name"
                        value={input.name}
                        placeholder="Your Name"
                        onChange={handlerInputChange}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<MdOutlineEmail />} />
                      <Input
                        type="email"
                        name="email"
                        value={input.email}
                        placeholder="Your Email"
                        onChange={handlerInputChange}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                      value={input.message}
                      onChange={handlerInputChange}
                    />
                  </FormControl>

                  <Button
                    colorScheme="blue"
                    bg="pink.400"
                    color="white"
                    border="none"
                    _hover={{
                      bg: "#D519FA",
                    }}
                    isFullWidth
                    type="submit"
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </Box>
          </Stack>
        </Container>
      ) : (
        <Submitted setSubmitted={setSubmitted} />
      )}
    </>
  );
}
