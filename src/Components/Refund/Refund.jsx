import React, { useState } from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Button,
  Container,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { postRefund } from "../../Actions";

export default function Refund() {
  const { user, isAuthenticated } = useAuth0();

  console.log(user);

  const dispatch = useDispatch();
  const history = useHistory();

  const [input, setInput] = useState({
    name: isAuthenticated ? user.given_name : "",
    lastName: isAuthenticated ? user.family_name : "",
    email: isAuthenticated ? user.email : "",
    charge: "",
    about: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      postRefund({
        ...input,
      })
    );
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <Container maxW="8xl" p="5" mt="150px">
      <Text fontSize='35px' mb='15px' mt='15px' ml='3%'>Refund Request</Text>
      <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true">
        <Box py={3}>
          <Box
            
          ></Box>
        </Box>
      </Box>

      <Box mt={[10, 0]}>
        <SimpleGrid
          display={{ base: "initial", md: "grid" }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
          margin='0 3%'
        >
          <GridItem colSpan={{ md: 1 }}>
            <Box px={[4, 0]}>
              <Text mt={2} fontSize='26px' lineHeight='28px' mb='20px'>
                Complete all the fields of the form to request a Key refund.
              </Text>
              <Text mt={2} >
                When will I receive my refund?
              </Text>
              <Text mt={3} >
                <Text>
                  The time it will take for you to receive your funds depends on
                  the type of payment method you used. Remember that refunds
                  have to go through a validation process before being approved.
                </Text>

                <Text mt={3}>
                  For example, a payment made via the PayPal Wallet takes just a
                  few moments to go through, but if you paid using a credit or
                  debit card - it might take between a few days up to 28
                  business days for your payment provider to process your
                  refund.
                </Text>

                <Text mt={3}>
                  You may contact your payment provider if you need more
                  information on the time they need to process your funds back
                  to you.
                </Text>
              </Text>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form
              method="POST"
              shadow="base"
              rounded={[null, "md"]}
              overflow={{ sm: "hidden" }}
              onSubmit={(event) => handleSubmit(event)}
            >
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg={useColorModeValue("#eaeaea", "gray.900")}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
                    <FormLabel
                      htmlFor="first_name"
                      fontSize="sm"
                      color={useColorModeValue("gray.900", "gray.50")}
                    >
                      First name
                    </FormLabel>
                    <Input
                      type="text"
                      name="name"
                      bg='white'
                      id="name"
                      defaultValue={input.name}
                      mt={1}
                      focusBorderColor="#8c06f7"
                      shadow="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
                    <FormLabel
                      htmlFor="last_name"
                      fontSize="sm"
                      color={useColorModeValue("gray.900", "gray.50")}
                    >
                      Last name
                    </FormLabel>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      bg='white'
                      defaultValue={input.lastName}
                      mt={1}
                      focusBorderColor="#8c06f7"
                      shadow="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 5]} isRequired>
                    <FormLabel
                      htmlFor="email_address"
                      fontSize="sm"
                      color={useColorModeValue("gray.900", "gray.50")}
                    >
                      Email address
                    </FormLabel>
                    <Input
                      type="text"
                      name="email"
                      id="email"
                      bg='white'
                      defaultValue={input.email}
                      mt={1}
                      focusBorderColor="#8c06f7"
                      shadow="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 5]} isRequired>
                    <FormLabel
                      htmlFor="charge"
                      fontSize="sm"
                      color={useColorModeValue("gray.900", "gray.50")}
                    >
                      Unique refund code
                    </FormLabel>
                    <Input
                      type="text"
                      name="charge"
                      id="charge"
                      bg='white'
                      value={input.charge}
                      mt={1}
                      focusBorderColor="#8c06f7"
                      shadow="sm"
                      w="full"
                      rounded="md"
                      onChange={(event) => handleInputChange(event)}
                    />
                    <FormHelperText
                      color={useColorModeValue("gray.900", "gray.50")}
                    >
                      This is the code that you received in your email. For example: "ch_3KgdChKlOgZYCvia0f6CAB0v".
                    </FormHelperText>
                  </FormControl>

                  <FormControl
                    as={GridItem}
                    id="email"
                    mt={1}
                    colSpan={6}
                    isRequired
                  >
                    <FormLabel
                      fontSize="sm"
                      color={useColorModeValue("gray.900", "gray.50")}
                    >
                      About
                    </FormLabel>
                    <Textarea
                      type="text"
                      name="about"
                      id="about"
                      bg='white'
                      value={input.about}
                      htmlFor="about"
                      mt={1}
                      rows={3}
                      shadow="sm"
                      focusBorderColor="#8c06f7"
                      fontSize={{ sm: "sm" }}
                      onChange={(event) => handleInputChange(event)}
                    />
                    <FormHelperText
                      color={useColorModeValue("gray.900", "gray.50")}
                    >
                      Brief description of the reason for the refund.
                    </FormHelperText>
                  </FormControl>
                </SimpleGrid>
              </Stack>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue("gray.300", "gray.800")}
                textAlign="right"
              >
                <Button type="submit" _focus={{ shadow: "" }}>
                  Send
                </Button>
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>

      <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true">
        <Box py={5}>
          <Box
            borderTop="solid 1px"
            borderTopColor={useColorModeValue("gray.200", "whiteAlpha.200")}
          ></Box>
        </Box>
      </Box>
    </Container>
  );
}
