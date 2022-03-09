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
} from "@chakra-ui/react";
import React from "react";
//import { useParams, useHistory, Link } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";

export default function Detail() {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 18 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            src="https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
            alt="Game.jpg"
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>

        <Stack divider={<StackDivider borderColor="gray.200" />}>
          <Box as="header">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              The Witcher 3: Wild Hunt
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }}>
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
                  OS:
                </Text>{" "}
                Windows
              </ListItem>

              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Region:
                </Text>{" "}
                Latinoamérica
              </ListItem>
            </List>
          </SimpleGrid>
        </Stack>
      </SimpleGrid>

      <Divider borderColor="gray.200" />

      <HStack>
        <SimpleGrid columns="2">
          <Box>
            Price: $ 479.99
            <Button size="lg">Add to cart</Button>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns="2">
          <Box>
            Premium price: $ 431.99
            <Button>Pay with premium!</Button>
          </Box>
        </SimpleGrid>
      </HStack>

      <h2>Screenshots</h2>

      <Divider borderColor="gray.200" />

      <div>
        Description:
        <div>
          <p>
            The third game in a series, it holds nothing back from the player.
            Open world adventures of the renowned monster slayer Geralt of Rivia
            are now even on a larger scale. Following the source material more
            accurately, this time Geralt is trying to find the child of the
            prophecy, Ciri while making a quick coin from various contracts on
            the side. Great attention to the world building above all creates an
            immersive story, where your decisions will shape the world around
            you.
          </p>
          <p>
            CD Project Red are infamous for the amount of work they put into
            their games, and it shows, because aside from classic third-person
            action RPG base game they provided 2 massive DLCs with unique
            questlines and 16 smaller DLCs, containing extra quests and items.
          </p>
          <p>
            Players praise the game for its atmosphere and a wide open world
            that finds the balance between fantasy elements and realistic and
            believable mechanics, and the game deserved numerous awards for
            every aspect of the game, from music to direction.
          </p>
        </div>
      </div>

      <Divider borderColor="gray.200" />

      <div>
        System requirements:
        <div>
          <p>
            minimum: "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon
            X800,10 Гб на винчестере,интернет-соединение"
          </p>
          <p>
            recommended: "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX
            280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение"
          </p>
        </div>
      </div>
    </Container>
  );
}
