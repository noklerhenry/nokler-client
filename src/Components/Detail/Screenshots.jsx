import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames, getGameDetails } from "../../Actions/index.js";
import {
  Text,
  Box,
  Flex,
  useColorModeValue,
  Image,
  HStack,
  AspectRatio,
} from "@chakra-ui/react";

export default function Screenshots() {
  const { nameid } = useParams();
  const dispatch = useDispatch();

  const details = useSelector((state) => state.videogame);
  const games = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getGameDetails(nameid));
  }, []);

  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "13px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const trailer = {
    video: details[0].game?.trailer,
  };

  const slides = [
    {
      img: details[0].game?.screenshots[0].url,
    },
    {
      img: details[0].game?.screenshots[1].url,
    },
    {
      img: details[0].game?.screenshots[2].url,
    },
    {
      img: details[0].game?.screenshots[3].url,
    },
    {
      img: details[0].game?.screenshots[4].url,
    },
    {
      img: details[0].game?.screenshots[5].url,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length + 1;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex w="full" p={10} alignItems="center" justifyContent="center">
      <Flex w="full" h="full" overflow="hidden" pos="relative">
        <Flex h="full" w="full" {...carouselStyle}>
          <Box key={`slide-1`} boxSize="full" shadow="md" flex="none">
            <Text
              color="white"
              fontSize="20px"
              p="8px 12px"
              pos="absolute"
              top="0"
            >
              1 / {slidesCount}
            </Text>
            <AspectRatio maxW="1280px" maxH="780px">
              <iframe
                src={trailer.video}
                title="YouTube video player"
                frameborder="0"
                borderRadius='20px'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </AspectRatio>
          </Box>

          {slides.map((slide, sid) => (
            <Box
              key={`slide-${sid}`}
              boxSize="full"
              shadow="md"
              flex="none"
              alignContent="center"
              borderRadius='20px'
            >
              <Text
                color="white"
                fontSize="md"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 2} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                borderRadius='20px'
                backgroundSize="cover"
                maxW="1280px"
                maxH="780px"
              />
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
}
