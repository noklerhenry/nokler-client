import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addGameFavorite } from "../Actions";
import { Button, useToast, Box, Image, Text, Heading, Link } from "@chakra-ui/react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

export const Card = ({ id, name, image, platform, productKey, genres }) => {
    
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
    <Box margin="10px" w="230px" h={{ base: "100%", sm: "400px", lg: "450px" }}>
      <Link href={'/details/'+ name}>
      <Image
        w="100%"
        h={{ base: "100%", sm: "300px", lg: "350px" }}
        src={image}
        alt="img not found"
        borderRadius='25px'
        fit="cover"
        align="center"
        boxShadow="5px 5px 15px #111111"
        mb="15px"
      />
      </Link>
      
        {genres.map((g) =>(
          <Button size="sm" height="15px" fontSize="11px" mt="5px" padding='1px 5px' mr='5px'>{g}</Button>
        ))}
      
      <Heading
        fontSize="21px"
        fontWeight="300"
        textTransform="uppercase"
        mt="10px"
        mb="10px"
      >
        {name}
      </Heading>
      {/* <Text>{`$ ${price}`}</Text> */}
      {/* <Text fontSize="20px" mt="10px" mb="10px">
        ${price}
      </Text> */}
      <Button size="sm" height="24px">
        <Link href={'/details/'+ name}>See game</Link>
      </Button>
      {/* <Button size="sm" height="24px" onClick={() => isClicked()}>
        +
      </Button> */}
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
