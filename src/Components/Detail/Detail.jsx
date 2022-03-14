import {
  Box,
  chakra,
  Container,
  Divider,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  HStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getAllGames, getGameDetails } from "../../Actions/index.js";
import Screenshots from "./Screenshots";
import { FaCartPlus } from "react-icons/fa";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const details = useSelector((state) => state.videogame);
  const games = useSelector((state) => state.games);

  console.log(details);

  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getGameDetails(id));
  }, []);

  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();
  const {
    isOpen: isScreenshotOpen,
    onOpen: onScreenshotOpen,
    onClose: onScreenshotClose,
  } = useDisclosure();

  const handleCart = (id) => {
    dispatch(addToCart(id));
  };

  /* useEffect(() => {
      dispatch(getGameDetails(props.match.params.id));
      return () => {
          dispatch(removeDetailCache())
      }
  }, [dispatch]) */

  return details ? (
    <Container maxW={"7xl"} mt="200px" mb="150px">
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 18 }}
      >
        <Flex flexDirection="column">
          <Image
            borderRadius="35px"
            boxShadow="3px 3px 15px #999999"
            src={details?.game?.image}
            alt="Game.jpg"
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "300px", lg: "500px" }}
          />
          <Box margin={"20px"} fontSize="xl">
            <Button onClick={onScreenshotOpen}>Screenshots+</Button>
            <Modal
              onClose={onScreenshotClose}
              isOpen={isScreenshotOpen}
              size={"full"}
              motionPreset="slideInBottom"
              colorScheme="black"
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Screenshots</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Screenshots />
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        </Flex>

        <Stack>
          <Box as="header">
            <Heading
              lineHeight={1.1}
              fontWeight={400}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {details?.game?.name}
            </Heading>
          </Box>

          <Box padding="4px">
            <Text color="#888888">
              <b>Digital key:</b> This is a digital edition of the product
              (CD-KEY)
            </Text>{" "}
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} mt="30px">
            <List>
              <ListItem borderBottom="1px dotted" padding="4px" mr="9px">
                <Text as={"span"} fontWeight={"bold"}>
                  Rating:
                </Text>{" "}
                {details?.game?.rating}
              </ListItem>

              <ListItem borderBottom="1px dotted" padding="4px" mr="9px">
                <Text as={"span"} fontWeight={"bold"}>
                  Platform:
                </Text>{" "}
                {details?.platform?.name}
              </ListItem>

              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Store:
                </Text>{" "}
                {details.store?.name}
              </ListItem>
            </List>

            <List>
              <ListItem borderBottom="1px dotted" padding="4px" mr="9px">
                <Text as={"span"} fontWeight={"bold"}>
                  Region:
                </Text>{" "}
                {details?.region}
              </ListItem>

              <ListItem borderBottom="1px dotted" padding="4px" mr="9px">
                <Text as={"span"} fontWeight={"bold"}>
                  Released:
                </Text>{" "}
                {details.game?.released_at.substring(0, 10)}
              </ListItem>
            </List>
          </SimpleGrid>

          <SimpleGrid columns={"2"} margin={"20px"}>
            <HStack>
              <Box>
                Price:
                <Box fontSize={"xl"}>
                  $ {details?.price}
                  <Button
                    onClick={() => {
                      onCartOpen();
                      handleCart(details.id);
                    }}
                    ml="4"
                  >
                    Add to cart
                  </Button>
                  <Modal
                    isCentered
                    onClose={onCartClose}
                    isOpen={isCartOpen}
                    motionPreset="slideInBottom"
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader fontSize="9xl">
                        <FaCartPlus h="30px" />
                      </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody fontSize="2xl">
                        You added one item to your cart!
                      </ModalBody>
                      <ModalFooter>
                        <Button mr={3} onClick={onCartClose}>
                          Continue Browsing
                        </Button>
                        <Button>Checkout now!</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Box>
              </Box>
            </HStack>
            {/* <HStack>
          <Box>
            Premium price:
            <Box fontSize={"x-large"}>
              $ 431.99
              <Button>Pay with premium!</Button>
            </Box>
          </Box>
        </HStack> */}
          </SimpleGrid>
        </Stack>
      </SimpleGrid>

      <Divider borderColor="gray.400" />

      <Divider borderColor="gray.400" />

      <VStack margin={"20px"}>
        Description:
        <Text fontSize="xl">{details.game?.description}</Text>
      </VStack>

      <Divider borderColor="gray.400" />

      {/*  <Box margin={"10px"} fontSize="xl">
        System requirements:
        <HStack marginRight={"20px"} marginTop={"20px"}>
          <Box>
            minimum: "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon
            X800,10 Гб на винчестере,интернет-соединение"
          </Box>
          <Box>
            recommended: "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX
            280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение"
          </Box>
        </HStack>
      </Box> */}
    </Container>
  ) : (
    <Box>Game Not found</Box>
  );
}
