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

export default function ContactForm() {
  return (
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
              Have a problem ?
            </Text>
            <br />
            <Text as={"span"} color={"pink.400"}>
              Contact Us !
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Describe your problem and our team will provide immediate assistance
          </Text>
        </Stack>
        <Box
          bg={useColorModeValue("white", "gray.700")}
          borderRadius="lg"
          p={8}
          color={useColorModeValue("gray.700", "whiteAlpha.900")}
          shadow="base"
        >
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>

              <InputGroup>
                <InputLeftElement children={<BsPerson />} />
                <Input type="text" name="name" placeholder="Your Name" />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>

              <InputGroup>
                <InputLeftElement children={<MdOutlineEmail />} />
                <Input type="email" name="email" placeholder="Your Email" />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>

              <Textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                resize="none"
              />
            </FormControl>

            <Button
              colorScheme="blue"
              bg="pink.400"
              color="white"
              border='none'
              _hover={{
                bg: "#D519FA",
              }}
              isFullWidth
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </Stack>
    </Container>
  );
}
