import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeGameFavorite, removeClickButtonFavorite } from "../../Actions";
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
  useColorMode,
  useToast,
  Grid,
} from "@chakra-ui/react";
import useScrollTop from "../useScrollTop";
import { BsFillTrashFill } from "react-icons/bs";
import Landing from "./noFavsLanding";

const WishList = () => {
  const favs = useSelector((state) => state.favoriteGames);
  const dispatch = useDispatch();

  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    localStorage.setItem("whislist", JSON.stringify(favs));
  }, [favs]);

  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("white", "gray.800");
  const bg3 = useColorModeValue("gray.100", "gray.900");

  const deleteGameFav = (id) => {
    dispatch(removeClickButtonFavorite(id));
    dispatch(removeGameFavorite(id));
  }; // -----> importanteee

  console.log(favs);

  const ScrollToTopOnMount = useScrollTop();

  return (
    <>
      <ScrollToTopOnMount />
      {favs.length ? (
        <Heading mt="180px" textAlign="center" fontSize="45px" fontWeight="400">
          Wishlist <span color="red">&#10084;</span>{" "}
        </Heading>
      ) : null}
      <Flex margin="0 3%" mt="30px" mb="50px">
        {favs.length ? (
          <>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="2">
              {favs.map((game, index) => {
                return (
                  <Box bg={bg3} padding="22px" borderRadius="20px">
                    <Text fontSize="23px" fontWeight="600" lineHeight="35px">
                      {" "}
                      {game.name}
                    </Text>

                    <Popover>
                      {/* Importanteeeeeeeeeee */}
                      <PopoverTrigger>
                        <Button
                          color={colorMode === "dark" ? "gray.400" : ""}
                          fontWeight={colorMode === "dark" ? "" : "bold"}
                          bg="transparent"
                          border="none"
                          outline="0"
                          boxShadow="0"
                          _focus={{ outline: "none" }}
                        >
                          See
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton color="white" mt="5px" />
                        <PopoverBody>
                          <UnorderedList>
                            {game?.productKey?.length >= 2
                              ? game?.productKey?.map((el) => {
                                  return (
                                    <ListItem
                                      color={
                                        colorMode === "dark" ? "white" : ""
                                      }
                                    >{`${
                                      el.region +
                                      " - $" +
                                      el.price +
                                      `${
                                        el.key?.length === 0
                                          ? " - Key Not Available"
                                          : " - Key Available"
                                      }`
                                    }`}</ListItem>
                                  );
                                })
                              : game?.productKey?.map((el) => {
                                  return (
                                    <ListItem
                                      color={
                                        colorMode === "dark" ? "white" : ""
                                      }
                                    >{`${
                                      el.region + " - $" + el.price
                                    }`}</ListItem>
                                  );
                                })}
                          </UnorderedList>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>

                    <Link to={`/details/${game.id}`}>
                      <Button
                        size="sm"
                        variant="solid"
                        colorScheme="purple"
                        h="25px"
                        mr="10px"
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
                        onClick={() => deleteGameFav(game.id)}
                      />
                    </ButtonGroup>
                  </Box>
                );
              })}
            </SimpleGrid>
            ``
          </>
        ) : (
          <Landing />
        )}
      </Flex>
    </>
  );
};

export default WishList;
