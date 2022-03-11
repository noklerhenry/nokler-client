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
  useColorModeValue,
  VisuallyHidden,
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
import React, { useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Screenshots from "./Screenshots";

export default function Detail() {
  const OverlayOne = () => {
    return <ModalOverlay />;
  };
  const OverlayTwo = () => {
    return <ModalOverlay />;
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <Container maxW={"7xl"} mt="150px" mb="150px">
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 18 }}
      >
        <Flex>
          <Image
            src="https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
            rounded={"md"}
            alt="Game.jpg"
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "300px", lg: "500px" }}
          />
        </Flex>

        <Stack divider={<StackDivider borderColor="gray.400" />}>
          <Box as="header">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              The Witcher 3: Wild Hunt
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} marginTop={"20px"}>
            <List>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Digital key:
                </Text>{" "}
                This is a digital edition of the product (CD-KEY)
              </ListItem>

              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Platform:
                </Text>{" "}
                PC
              </ListItem>
            </List>

            <List>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Region:
                </Text>{" "}
                Latinoamérica
              </ListItem>

              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  OS:
                </Text>{" "}
                Windows
              </ListItem>
            </List>
          </SimpleGrid>
        </Stack>
      </SimpleGrid>

      <Divider borderColor="gray.400" />

      <SimpleGrid columns={"2"} margin={"20px"}>
        <HStack>
          <Box>
            Price:
            <Box fontSize={"x-large"}>
              $ 479.99
              <Button
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onOpen();
                }}
                ml="4"
              >
                Add to cart
              </Button>
              <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset="slideInBottom"
              >
                {overlay}
                <ModalContent>
                  <ModalHeader>Added to cart</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>Im in a modal!</ModalBody>
                  <ModalFooter>
                    <Button mr={3} onClick={onClose}>
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

      <Divider borderColor="gray.400" />

      <Box margin={"20px"}>
        <Button
          onClick={() => {
            setOverlay(<OverlayTwo />);
            onOpen();
          }}
        >
          Screenshots+
        </Button>
        <Modal
          onClose={onClose}
          size={"6xl"}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          {overlay}
          <ModalContent>
            <ModalHeader>Screenshots</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Screenshots />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>

      <Divider borderColor="gray.400" />

      <VStack margin={"20px"}>
        Description:
        <Text>
          <Box>
            The third game in a series, it holds nothing back from the player.
            Open world adventures of the renowned monster slayer Geralt of Rivia
            are now even on a larger scale. Following the source material more
            accurately, this time Geralt is trying to find the child of the
            prophecy, Ciri while making a quick coin from various contracts on
            the side. Great attention to the world building above all creates an
            immersive story, where your decisions will shape the world around
            you.
          </Box>
          <Box>
            CD Project Red are infamous for the amount of work they put into
            their games, and it shows, because aside from classic third-person
            action RPG base game they provided 2 massive DLCs with unique
            questlines and 16 smaller DLCs, containing extra quests and items.
          </Box>
          <Box>
            Players praise the game for its atmosphere and a wide open world
            that finds the balance between fantasy elements and realistic and
            believable mechanics, and the game deserved numerous awards for
            every aspect of the game, from music to direction.
          </Box>
        </Text>
      </VStack>

      <Divider borderColor="gray.400" />

      <Box margin={"10px"}>
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
