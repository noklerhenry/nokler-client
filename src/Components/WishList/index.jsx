import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeGameFavorite } from "../../Actions";
import { Link } from "react-router-dom";
import {
  chakra,
  Flex,
  Box,
  useColorModeValue,
  Button,
  Stack,
  SimpleGrid,
  ButtonGroup,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  ListItem,
  UnorderedList,
  Heading,
  Text,
  useToast,
  Grid,
} from "@chakra-ui/react";
import { BsFillTrashFill } from "react-icons/bs";
import Landing from "./noFavsLanding";

const WishList = () => {
  const favs = useSelector((state) => state.favoriteGames);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("whislist", JSON.stringify(favs));
  }, [favs]);

  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("white", "gray.800");
  const bg3 = useColorModeValue("gray.100", "gray.900");

  console.log(favs)

  return (
    <>
    <Heading mt='180px' textAlign='center' fontSize='45px' fontWeight='400'>Wishlist <span color='red'>&#10084;</span> </Heading>
      
      <Flex margin='0 3%' mt='30px' mb='50px'>
      {favs.length ? (
        <SimpleGrid columns={{sm:1, md:2, lg:3}} spacing='2'>
          {favs.map((game, index) => {
              return (

                <Box bg={bg3} padding='22px' borderRadius='20px'>
                  <Text fontSize='23px' fontWeight='600' lineHeight='35px'> {game.name}</Text>
                  <Popover>
                        <PopoverTrigger>
                          <Button
                            bg="transparent"
                            size="sm"
                            outline="0"
                            boxShadow="0"
                            h='25px'
                            mr='10px'
                            _focus={{ outline: "none" }}
                          >
                            Platforms
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton color="#8c06f7" mt="5px" />
                          <PopoverBody>
                            <UnorderedList>
                                {game?.platform?.map(p => {
                                    return (
                                        <ListItem color="#8c06f7">{p}</ListItem>
                                    )
                                })}
                            </UnorderedList>
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>

                      <Link to={`/details/${game.name}`}>
                        <Button
                          size="sm"
                          variant="solid"
                          colorScheme="purple"
                          h='25px'
                          mr='10px'
                          border="none"
                          outline="0"
                          boxShadow="0"
                          _focus={{ outline: "none" }}
                        >
                          Go to game
                        </Button>
                      </Link>

                      <ButtonGroup
                        variant="solid"
                        size="sm"
                        spacing={3}
                        mr="50px"
                      >
                        <IconButton
                          colorScheme="red"
                          mt="5px"
                          variant="outline"
                          icon={<BsFillTrashFill />}
                          outline="0"
                          boxShadow="0"
                          onClick={() => dispatch(removeGameFavorite(game.id))}
                        />
                      </ButtonGroup>

                </Box>




              );
            })}

        </SimpleGrid>
  

      ) : (
        <Landing />
      )}

      </Flex>
    </>
  );
};

export default WishList;