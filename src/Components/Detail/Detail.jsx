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
import { getGameDetails } from "../../Actions/index.js";
import Screenshots from "./Screenshots";
import { FaCartPlus } from "react-icons/fa";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const details = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getGameDetails(id));
  }, [dispatch, id]);

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

  /* useEffect(() => {
      dispatch(getGameDetails(props.match.params.id));
      return () => {
          dispatch(removeDetailCache())
      }
  }, [dispatch]) */

  return (
    <Container maxW={"7xl"} mt="180px" mb="150px">
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 18 }}
      >
        <Flex flexDirection='column'>
          <Image
            src="https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
            borderRadius='35px'
            boxShadow='3px 3px 15px #999999'
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

        <Stack >
          <Box as="header">
            <Heading
              lineHeight={1.1}
              fontWeight={400}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              The Witcher 3: Wild Hunt
            </Heading>
          </Box>

          <Box padding='4px'>
            <Text color='#888888'>
              <b>Digital key:</b> This is a digital edition of the product (CD-KEY)
            </Text>{" "}
            
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} mt='30px'>
            <List>
              <ListItem borderBottom='1px dotted' padding='4px' mr='9px'>
                <Text as={"span"} fontWeight={"bold"}>
                  Rating:
                </Text>{" "}
                4.75 / 5
              </ListItem>

              <ListItem borderBottom='1px dotted' padding='4px' mr='9px'>
                <Text as={"span"} fontWeight={"bold"}>
                  Platform:
                </Text>{" "}
                Steam
              </ListItem>
            </List>

            <List>
              <ListItem borderBottom='1px dotted' padding='4px' mr='9px'>
                <Text as={"span"} fontWeight={"bold"}>
                  Region:
                </Text>{" "}
                Latinoamérica
              </ListItem>

              <ListItem borderBottom='1px dotted' padding='4px' mr='9px'>
                <Text as={"span"} fontWeight={"bold"}>
                  Released:
                </Text>{" "}
                2015-05-18
              </ListItem>
            </List>
          </SimpleGrid>

          <SimpleGrid columns={"2"} margin={"20px"}>
            <HStack>
              <Box>
                Price:
                <Box fontSize={"xl"}>
                  $ 479.99
                  <Button onClick={onCartOpen} ml="4">
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
                        <FaCartPlus h='30px'/>
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
        <Text fontSize="xl">
          The third game in a series, it holds nothing back from the player.
          Open world adventures of the renowned monster slayer Geralt of Rivia
          are now even on a larger scale. Following the source material more
          accurately, this time Geralt is trying to find the child of the
          prophecy, Ciri while making a quick coin from various contracts on the
          side. Great attention to the world building above all creates an
          immersive story, where your decisions will shape the world around you.
          CD Project Red are infamous for the amount of work they put into their
          games, and it shows, because aside from classic third-person action
          RPG base game they provided 2 massive DLCs with unique questlines and
          16 smaller DLCs, containing extra quests and items. Players praise the
          game for its atmosphere and a wide open world that finds the balance
          between fantasy elements and realistic and believable mechanics, and
          the game deserved numerous awards for every aspect of the game, from
          music to direction.
        </Text>
      </VStack>

      <Divider borderColor="gray.400" />

      <Box margin={"10px"} fontSize="xl">
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
      </Box>
    </Container>
  );
}
