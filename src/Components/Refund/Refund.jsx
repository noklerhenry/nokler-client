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

export default function Refund() {
  const { user, loginWithPopup, isAuthenticated } = useAuth0();

  console.log(user);

  const dispatch = useDispatch();
  const history = useHistory();

  const [input, setInput] = useState({
    first_name: isAuthenticated ? user.given_name : "",
    last_name: isAuthenticated ? user.family_name : "",
    email_address: isAuthenticated ? user.email : "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handlerInputChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    console.log(input);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postContactForm({
        contactForm: {
          ...input,
        },
      })
    );
    setSubmitted(true);
    console.log(input);
    setInput({
      ...input,
      message: "",
    });
  };

  return (
    <Container maxW="8xl" p="5" mt="200px">
      <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true">
        <Box py={5}>
          <Box
            borderTop="solid 1px"
            borderTopColor={useColorModeValue("gray.200", "whiteAlpha.200")}
          ></Box>
        </Box>
      </Box>

      <Box mt={[10, 0]}>
        <SimpleGrid
          display={{ base: "initial", md: "grid" }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          <GridItem colSpan={{ md: 1 }}>
            <Box px={[4, 0]}>
              <Heading>Refund formulary</Heading>
              <Text mt={2} color={useColorModeValue("gray.600", "gray.400")}>
                Complete all the fields of the form to request a Key refund.
              </Text>
              <Text mt={2} color={useColorModeValue("gray.600", "gray.400")}>
                When will I receive my refund?
              </Text>
              <Text mt={3} color={useColorModeValue("gray.600", "gray.400")}>
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
            >
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg={useColorModeValue("gray.400", "gray.900")}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
                    <FormLabel
                      htmlFor="first_name"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      First name
                    </FormLabel>
                    <Input
                      type="text"
                      name="first_name"
                      id="first_name"
                      defaultValue={input.first_name}
                      autoComplete="given-name"
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
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Last name
                    </FormLabel>
                    <Input
                      type="text"
                      name="last_name"
                      id="last_name"
                      defaultValue={input.last_name}
                      autoComplete="family-name"
                      mt={1}
                      focusBorderColor="#8c06f7"
                      shadow="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 4]} isRequired>
                    <FormLabel
                      htmlFor="email_address"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Email address
                    </FormLabel>
                    <Input
                      type="text"
                      name="email_address"
                      id="email_address"
                      defaultValue={input.email_address}
                      autoComplete="email"
                      mt={1}
                      focusBorderColor="#8c06f7"
                      shadow="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 4]} isRequired>
                    <FormLabel
                      htmlFor="refund_code"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Unique refund code
                    </FormLabel>
                    <Input
                      mt={1}
                      focusBorderColor="#8c06f7"
                      shadow="sm"
                      w="full"
                      rounded="md"
                    />
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
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      About
                    </FormLabel>
                    <Textarea
                      mt={1}
                      rows={3}
                      shadow="sm"
                      focusBorderColor="brand.400"
                      fontSize={{ sm: "sm" }}
                    />
                    <FormHelperText>
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
                <Button type="submit" _focus={{ shadow: "" }} fontWeight="md">
                  Save
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
