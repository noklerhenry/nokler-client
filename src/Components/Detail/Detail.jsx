import {
  Box,
  chakra,
  Container,
  Divider,
  Stack,
  Text,
  Image,
  Flex,
  Grid, GridItem, 
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
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getAllGames,
  getAllProducts,
  getGameDetails,
} from "../../Actions/index.js";
import Screenshots from "./Screenshots";
import { FaCartPlus } from "react-icons/fa";
import ImagesGallery from "../ImageSlider/index.jsx";
import VideoPlayer from "../VideoPlayer/index.jsx";
import { Key } from "./Key.jsx";

export default function Detail() {
  const { nameid } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const details = useSelector((state) => state.videogame);
  const games = useSelector((state) => state.games);
  const cart = useSelector((state) => state.cart);

  const [theGame, setTheGame] = useState();
  const [disabled, setDisabled] = useState(false);

  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("#efefef", "#18181880");
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

  console.log(details);

  return (
    <>
    <Container maxW='1300px' mt="200px" mb="30px">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }}
        spacing={{ base: 2, md: 2 }}
      >
        <Flex flexDirection="column">
          <Box mr="4rem" mt="6px" display={["none", "none","none", "none", "flex","flex","flex", "flex",
            ]}
          >
            <ImagesGallery />
          </Box>
          <Image borderRadius="35px" boxShadow="3px 3px 25px #8c06f770"  src={details[0]?.game.image} alt="Game.jpg" fit={"cover"} align={"center"}  w={"100%"}  h={{ base: "100%", sm: "300px", lg: "500px" }} display={[ "flex", "flex", "flex", "flex", "none",  "none", "none", "none",
            ]}
          />
          <Box margin={"20px"} fontSize="xl">
            <Button display={[ "flex", "flex", "flex", "flex",  "none",  "none","none",  "none",]} ml={["-15px", "90px", "130px", "160px", null, null, null, null]}
              onClick={onScreenshotOpen}
            >
              Screenshots →
            </Button>
            <Modal onClose={onScreenshotClose} isOpen={isScreenshotOpen} size={"full"} motionPreset="slideInBottom" colorScheme="black"
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
            <Text padding="1px">
              <b>Digital key:</b> This is a digital edition of the product
              (CD-KEY)
            </Text>{" "}
          </Box>

          <SimpleGrid columns={{ base: 1, md: 1, lg:2 }} mt="30px">
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

          <List>
              <ListItem borderBottom="1px dotted" padding="4px" mr="9px">
                <Text as={"span"} fontWeight={"bold"}>
                  &#9650; Genres:
                </Text>{" "}
                {details[0]?.game.genres.map((g) =>(
                  <Button float='right' display='inline-block' borderRadius='20px' fontSize='11px' h='23px' ml='5px' border='1px'>{g.name}</Button>
                ))}
              </ListItem>
            </List>

          <Box mb='20px'>
            <Heading fontSize="26px" fontWeight="400" mb="20px" mt='20px'>
              AVAILABLE KEYS
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} mb="30px">
              {details.map((g) => (
                <Key
                  g={g}
                  handleCart={handleCart}
                  nameid={nameid}
                  onCartOpen={onCartOpen}
                />
              ))}
            </SimpleGrid>
          </Box>
        </Stack>
      </SimpleGrid>

      <Grid templateColumns='repeat(5, 1fr)' mt="-10px" mb='30px'>
        <GridItem GridItem colSpan={{ base: 5, md: 1, lg: 2, }}>
          <Heading fontSize="26px" fontWeight="400" mt="-0px" mb='30px'>
            DESCRIPTION
          </Heading>
      </GridItem>
      <GridItem GridItem colSpan={{ base: 5, md: 4, lg: 3, }}>
        <Text fontSize="xl" mt="0px">
          {details[0]?.game.description}
        </Text>
      </GridItem>
      </Grid>
      

       
        <Flex  fontSize="xl">
        <Heading fontSize="26px" fontWeight="400" mt="-0px">
            VIDEOS
          </Heading>
        </Flex>
        <Box mt="-115px">
          <VideoPlayer details={details} />
        </Box>
      
      </Container>
      </>
    
    // ) : (
    //   <Box>Game NOT Found</Box>
  );
}
