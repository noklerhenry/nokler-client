import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Flex, Box } from "@chakra-ui/react";
import { getGameDetails, getAllGames } from "../../Actions";

export default function ImagesGallery() {
  const { nameid } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.videogame);

  
   useEffect(() => {
    dispatch(getAllGames());
     dispatch(getGameDetails(nameid));
   }, []);
  

  const functionImages = () => {
    const images = [];
    for (let i = 0; i < details[0]?.game?.screenshots.length; i++) {
      images.push({
        original: details[0]?.game?.screenshots[i].url,
        thumbnail: details[0]?.game?.screenshots[i].url
      });
    }
    return images;
  };
  
  const img = [
    {
      original: details[0]?.game?.image,
      thumbnail: details[0]?.game?.image
    }
  ].concat(functionImages());
  
  
//   useEffect(() => {
//     console.log(img)
//   }, [img]);

  return (
    <Flex w="40vw" h={[null, null, null, null, null, null, "40vw", "30vw"]} m="auto">
      <Box
        w={{
          base: "220%",
          sssm: "200%",
          ssm: "185%",
          sm: "170%",
          md: "120%",
          lg: "120%",
          xl: "115%",
          xxl: "100%",
          xxxl: "85%"
        }}
      >
        <ImageGallery
          items={img}
          showBullets={true}
          showPlayButton={false}
          slideDuration={300}
          slideOnThumbnailOver={true}
        />
      </Box>
    </Flex>
  );
}
