import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeGameFavorite } from "../../Actions";
import { Link } from 'react-router-dom';
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
  useToast
} from "@chakra-ui/react";
import { BsFillCartFill, BsFillTrashFill } from "react-icons/bs";
import { IoHomeSharp } from 'react-icons/io5';
import Landing from "./noFavsLanding";
import { addToCart } from "../../Actions";

const Templete = () => {
    
  const favs = useSelector((state) => state.favoriteGames);
  const dispatch = useDispatch();
  
  const toast = useToast();

    useEffect(() => {
        console.log(favs)
    }, [favs])

    // const data = [
    //   { name: 'Grand Theft Auto V', store: [{ n: "Steam"}, {n: "Origin" }], key: 'Available' },
    //   { name: "Portal 2", store: [{ n: "Steam"}, {n: "Origin" }, {n: 'Xbox-Live'}], key: ' Not Available'  },
    //   { name: "The Witcher 3", store:[{ n: "Steam"}, {n: "Origin" }, {n: 'PSN'}], key: 'Available'  },
    //   { name: "Tomb Raider", store: [{ n: "Steam"}, {n: "Origin" }, {n: 'Xbox-Live'}], key: 'Not Available'  },
    //   { name: "Payday 2", store:[{ n: "Steam"}, {n: "Origin" }], key: 'Available'  },
    //   { name: "Fortnite", store: [{ n: "Steam"}, {n: "Origin" }], key: 'Available'  },
    //   { name: "The Last Of Us", store:[{ n: "Steam"}, {n: "Origin" }], key: 'Not Available'  },
    //   { name: "Killzone: Shadow Fall", store:[{ n: "Steam"}, {n: "Origin" }], key: 'Not Available'}
    // ];

  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("white", "gray.800");
  const bg3 = useColorModeValue("gray.100", "gray.700");

  return (
    <>
      {favs.length ? (
        <Flex
          w="full"
          bg="#121019"
          p={50}
          alignItems="center"
          justifyContent="center"
          mt="12rem"
        >
          <Box pos='absolute' mt='-1020px'>
            <Link to="/">
              <IconButton aria-label="back home" icon={<IoHomeSharp />} />
            </Link>
          </Box>
          <Stack
            direction={{ base: "column" }}
            w="full"
            bg={{ md: bg }}
            shadow="lg"
          >
            {favs.map((game, index) => {
              return (
                <Flex
                  direction={{ base: "row", md: "column" }}
                  bg={bg2}
                  key={index}
                >
                  <SimpleGrid
                    spacingY={3}
                    columns={{ base: 1, md: 5 }}
                    w={{ base: 120, md: "full" }}
                    bg={bg3}
                    color={"gray.500"}
                    py={{ base: 1, md: 4 }}
                    px={{ base: 2, md: 10 }}
                    fontSize="md"
                    fontWeight="hairline"
                  >
                    <Box as="span" ml="5px" fontWeight="bold">
                      Name
                    </Box>
                    <Box as="span" ml="5px" fontWeight="bold">
                      Store
                    </Box>
                    <Box as="span" fontWeight="bold">
                      Key
                    </Box>
                    <Box as="span" ml="88px" fontWeight="bold">
                      Detail
                    </Box>
                  </SimpleGrid>
                  <SimpleGrid
                    spacingY={3}
                    columns={{ base: 1, md: 5 }}
                    w="full"
                    py={2}
                    px={6}
                    fontWeight="hairline"
                  >
                    <Box as="span" mt="7px" ml="20px">
                      {game.name}
                    </Box>
                    <chakra.span
                      textOverflow="ellipsis"
                      overflow="hidden"
                      whiteSpace="nowrap"
                      mt="-2px"
                      ml="10px"
                    >
                      <Popover>
                        <PopoverTrigger>
                          <Button
                            color="white"
                            bg="transparent"
                            border="none"
                            outline="0"
                            boxShadow="0"
                            _focus={{ outline: 'none'}}
                          >
                            See
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton color="white" mt="5px" />
                          <PopoverHeader color="white">Stores :</PopoverHeader>
                          <PopoverBody>
                            <UnorderedList>
                              {/* {game?.store?.map((el) => {
                                return <ListItem color="white">{el.n}</ListItem>;
                              })} */}
                            </UnorderedList>
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </chakra.span>
                    <Flex>
                      <chakra.span
                        textOverflow="ellipsis"
                        overflow="hidden"
                        whiteSpace="nowrap"
                        mt="9px"
                      >
                        <Box
                          as="span"
                          ml="3px"
                            // color={
                            //   game.key === "Available" ? "green.500" : "red.500"
                            // }
                        >
                          {/* {game.key} */}
                          {game.id}
                        </Box>
                      </chakra.span>
                    </Flex>
                    <Flex mt="5px" ml="40px">
                      <Button
                        size="sm"
                        variant="solid"
                        colorScheme="purple"
                        p="2px 40px"
                        border="none"
                        outline="0"
                        boxShadow="0"
                        _focus={{ outline: "none" }}
                      >
                        More Info
                      </Button>
                    </Flex>
                    <Flex justify={{ md: "end" }}>
                      <ButtonGroup
                        variant="solid"
                        size="sm"
                        spacing={3}
                        mr="20px"
                      >
                        <IconButton
                          mt="5px"
                          BgColor="grey"
                          color="white"
                          border="none"
                          outline="0"
                          boxShadow="0"
                          _focus={{ outline: 'none'}}
                          icon={<BsFillCartFill />}
                          onClick={() => {
                            dispatch(addToCart(game.id));
                            toast({
                              isClosable: true,
                              title: "Success!",
                              description: "Game added to Cart",
                              duration: 2000,
                              position: "bottom-right",
                              status: "success",
                            });
                          }}
                        />
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
                    </Flex>
                  </SimpleGrid>
                </Flex>
              );
            })}
          </Stack>
        </Flex>
      ) : (
        <Landing />
      )}
    </>
  );
};

export default Templete;
