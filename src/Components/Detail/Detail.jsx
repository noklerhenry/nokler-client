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
  Link,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getAllGames, getAllProducts, getGameDetails } from "../../Actions/index.js";
import Screenshots from "./Screenshots";
import { FaCartPlus } from "react-icons/fa";
import ImagesGallery from "../ImageSlider/index.jsx";
import VideoPlayer from "../VideoPlayer/index.jsx";

export default function Detail() {
  const { nameid } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const details = useSelector((state) => state.videogame);
  const games = useSelector((state) => state.games);

  const [theGame, setTheGame] = useState()

  const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue('#efefef', '#18181880')
  //const color = useColorModeValue('white', 'gray.800')

//   console.log(nameid)
  // useEffect(() => {
  //   // axios.get('https://nokler-api.herokuapp.com/getProductByGame?game=' + nameId)
  //   // .then((response) =>{
  //   //   console.log(response)
  //   //   setTheGame(response.data)
  //   //     })
  // }, []);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getGameDetails(nameid));
    // console.log(details)
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

  //  useEffect(() => {
  //     dispatch(getGameDetails(id));
  //     return () => {
  //         dispatch(removeDetailCache())
  //     }
  // }, [dispatch]) 

//   console.log(details)

  return (
    <Container maxW={"7xl"} mt="200px" mb="30px">
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 18 }}
      >
        <Flex flexDirection="column">
          <Box
            mr="4rem"
            mt="6px"
            display={[
              "none",
              "none",
              "none",
              "none",
              "flex",
              "flex",
              "flex",
              "flex",
            ]}
          >
            <ImagesGallery />
          </Box>
          <Image
            borderRadius="35px"
            boxShadow="3px 3px 25px #8c06f770"
            src={details[0]?.game.image}
            alt="Game.jpg"
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "300px", lg: "500px" }}
            display={[
              "flex",
              "flex",
              "flex",
              "flex",
              "none",
              "none",
              "none",
              "none",
            ]}
          />
          <Box margin={"20px"} fontSize="xl">
            <Button
              display={[
                "flex",
                "flex",
                "flex",
                "flex",
                "none",
                "none",
                "none",
                "none",
              ]}
              ml={["-15px", "90px", "130px", "160px", null, null, null, null]}
              onClick={onScreenshotOpen}
            >
              Screenshots →
            </Button>
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
              {details[0]?.game.name}
            </Heading>
          </Box>

          <Box padding="4px">
            <Text color="#888888" padding="1px">
              <b>Digital key:</b> This is a digital edition of the product
              (CD-KEY)
            </Text>{" "}
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} mt="30px">
            <List>
              <ListItem borderBottom="1px dotted" padding="4px" mr="9px">
                <Text as={"span"} fontWeight={"bold"}>
                  &#9733; Rating:
                </Text>{" "}
                {details[0]?.game.rating}
              </ListItem>
            </List>

            <List>
              <ListItem borderBottom="1px dotted" padding="4px" mr="9px">
                <Text as={"span"} fontWeight={"bold"}>
                  &#9737; Released:
                </Text>{" "}
                {details[0]?.game.released_at.substring(0, 10)}
              </ListItem>
            </List>
          </SimpleGrid>

          <Box>
            <Text fontSize="24px" fontWeight="700" mb="20px">
              Available Keys
            </Text>
            <SimpleGrid columns={{ base: 2, md: 2, lg: 3 }} mb="20px">
              {details.map((g) => (
                <Box key={g.id} bg={bg} padding="19px" borderRadius="20px">
                  <Text mt="-7px">
                    <Text fontSize="7px">STORE</Text> {g.store.name}
                  </Text>
                  <Text mt="-3px">
                    {" "}
                    <Text fontSize="7px">PLATFORM</Text>
                    {g.platform.name}
                  </Text>
                  <Text mt="-3px">
                    {" "}
                    <Text fontSize="7px">REGION</Text>
                    {g.region}
                  </Text>
                  <Text fontSize="22px">
                    <Text fontSize="7px">PRICE</Text>$ {g.price}
                  </Text>
                  <Button
                    onClick={() => {
                      onCartOpen();
                    //   console.log(g.id);
                      handleCart(g.id);
                    }}
                    ml="4"
                    bg="none"
                    padding="1px 7px"
                    h="22px"
                    fontSize="14px"
                  >
                    Add to cart
                  </Button>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <SimpleGrid columns={"2"} margin={"20px"}>
            <HStack>
              <Box>
                <Box fontSize={"xl"}>
                  {/* $ {details?.price}
                  <Button
                    onClick={() => {
                      onCartOpen();
                      handleCart(details.id);
                    }}
                    ml="4"
                  >
                    Add to cart
                  </Button> */}
                  <Modal
                    isCentered
                    onClose={onCartClose}
                    isOpen={isCartOpen}
                    motionPreset="slideInBottom"
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader fontSize="9xl"></ModalHeader>
                      <ModalCloseButton />
                      <ModalBody fontSize="2xl">
                        <FaCartPlus size={23} />
                        You added one item to your cart!
                      </ModalBody>
                      <ModalFooter>
                        <Button mr={3} onClick={onCartClose}>
                          Continue Browsing
                        </Button>
                        <Button>
                          <Link href="/checkout">Checkout now!</Link>
                        </Button>
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
      <Text fontSize="24px" fontWeight="700" mt="-50px">
        Description
      </Text>
      <Text fontSize="xl" mt="30px">
        {details[0]?.game.description}
      </Text>
      <Divider border="dotted #cccccc" mt="30px" />
      <Flex justify='center' fontSize="xl">
        <Text fontWeight="bold" mt='50px'>{`${details[0]?.game?.name} Videos`}</Text>
      </Flex>
      <Box mt='-115px'>
        <VideoPlayer details={details} />
      </Box>
    </Container>
    // ) : (
    //   <Box>Game NOT Found</Box>
  );
}
