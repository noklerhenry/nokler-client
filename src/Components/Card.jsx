import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addGameFavorite,
  removeGameFavorite,
  clickedButtonFavorite,
  removeClickButtonFavorite,
} from "../Actions";
import {
  Button,
  useToast,
  Box,
  Image,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

export const Card = ({
  id,
  name,
  image,
  genres,
  productKey,
  fav,
  platform,
  store,
  game,
  region,
  price,
  arrayKey
}) => {
  const favClicked = useSelector((state) => state.gamesAddedToFav);
  const dispatch = useDispatch();

  console.log(id);

  useEffect(() => {
    localStorage.setItem("favClicked", JSON.stringify(favClicked));
  }, [favClicked]);

  const handleFav = (index) => {
    if (favClicked.includes(index)) {
      dispatch(removeGameFavorite(index));
      dispatch(removeClickButtonFavorite(index));
    } else {
      fav
        ? dispatch(addGameFavorite({ id, name, productKey }))
        : dispatch(
            addGameFavorite({
              id,
              name: game?.name,
              region,
              price,
              arrayKey
            })
          );
      dispatch(clickedButtonFavorite(index));
    }
  };

  return (
    <Box margin="auto" w="230px" h={{ base: "100%", sm: "400px", lg: "450px" }}>
      <Link href={"/details/" + id}>
        <Image
          w="100%"
          h={{ base: "100%", sm: "300px", lg: "350px" }}
          src={image}
          alt="img not found"
          borderRadius="25px"
          fit="cover"
          align="center"
          boxShadow="5px 5px 15px #111111"
          mb="15px"
        />
      </Link>

      {platform && (
        <Button
          size="sm"
          height="15px"
          fontSize="11px"
          mt="5px"
          padding="1px 5px"
          mr="5px"
        >
          {platform}
        </Button>
      )}
      {store && (
        <Button
          size="sm"
          height="15px"
          fontSize="11px"
          mt="5px"
          padding="1px 5px"
          mr="5px"
        >
          {store}
        </Button>
      )}

      {genres?.map((g) => (
        <Button
          size="sm"
          height="15px"
          fontSize="11px"
          mt="5px"
          padding="1px 5px"
          mr="5px"
        >
          {g}
        </Button>
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
      <Button size="sm" height="24px">
        <Link href={"/details/" + id}>See game</Link>
      </Button>
        <Button
          key={id}
          border="none"
          bg="transparent"
          outline="0"
          boxShadow="0"
          _hover={{ bg: "none" }}
          _focus={{ outline: "0" }}
          onClick={() => handleFav(id)}
        >
          {favClicked.includes(id) ? (
            <HiHeart color="red" />
          ) : (
            <HiOutlineHeart />
          )}
        </Button>
    </Box>
  );
};
