import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addGameFavorite } from "../Actions";
import { Button, useToast, Box, Image, Text, Heading } from "@chakra-ui/react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

export const Card = ({ id, name, image, price, platform, productKey }) => {
    
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favoriteGames);
  let games = useSelector((state) => state.games);

  const handleClick = (id) => {
    dispatch(addToCart(id));
  };

  const toast = useToast();

  const isClicked = () => {
    handleClick(id);

    toast({
      isClosable: true,
      title: "Success!",
      description: "Game added to Cart",
      duration: 2000,
      position: "bottom-right",
      status: "success",
    });
  };

  const handleFav = () => {
    setClicked(true);
    dispatch(addGameFavorite({ id, name, platform, productKey }));
    console.log(favs);
    // console.log(games)
  };

  return (
    <Box margin="10px" w="250px" h={{ base: "80%", sm: "400px", lg: "500px" }}>
      <Image
        w="100%"
        h={{ base: "80%", sm: "300px", lg: "350px" }}
        src={image}
        alt="img not found"
        borderRadius='20px'
        fit="cover"
        align="center"
        boxShadow="5px 5px 15px #111111"
        mb="15px"
      />
      <Button size="sm" height="15px" fontSize="11px" mt="5px">
        CATEGORY
      </Button>
      <Heading
        fontSize="21px"
        fontWeight="300"
        textTransform="uppercase"
        mt="10px"
        mb="10px"
      >
        {name}
      </Heading>
      <Text>{`$ ${price}`}</Text>
      {/* <Text fontSize="20px" mt="10px" mb="10px">
        ${price}
      </Text> */}
      <Button size="sm" height="24px">
        See game
      </Button>
      <Button size="sm" height="24px" onClick={() => isClicked()}>
        +
      </Button>
      <Button
        border="none"
        bg="transparent"
        _hover={{ bg: "none" }}
        onClick={handleFav}
      >
        {clicked ? <HiHeart color="red" /> : <HiOutlineHeart />}
      </Button>
    </Box>
  );
};
