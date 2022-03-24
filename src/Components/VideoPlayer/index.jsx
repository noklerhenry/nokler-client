import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import ReactPlayer from "react-player/youtube";
import { Flex, Box, useMediaQuery, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion/dist/framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const API_KEY_A = "AIzaSyAvC-_PQjqwUEW1fsiiZDqTuvicrVzWfLk";
const API_KEY_B = "AIzaSyBTnTZyd_i7HebefXtW6TjiTQPfCoj5sYQ";
const API_KEY_C = "AIzaSyDt_ArJlixuBcsYMhtnmz89eExkyJGW_DU";

const API_KEY_DEMO1 = "AIzaSyAT0trHQbfhJFY9xaTuleCVZ_tB9De5-ZQ";
const API_KEY_DEMO2 = "AIzaSyDP_JZaL59rHMVuIzE6KqO9iXt_LMYQX28";

const VideoPlayer = ({ details }) => {
    const [videos, setVideos] = useState([]);
    
    const getVideosYT = async () => {
       const info = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY_DEMO2}&type=video&q=${details[0]?.game?.name + " " + details[0]?.game?.released_at?.substring(0, 4) + " "}videogame trailer`);
       const resp = info.data.items
       setVideos(resp)
    };
    
    useEffect(() => {
        getVideosYT() 
    }, [details])
    
    // console.log('videos: ', videos)
    
    const arr = [
      {
        id: videos[0]?.etag,
        url: `https://www.youtube.com/embed/${videos[0]?.id?.videoId}`,
      },
      {
        id: videos[1]?.etag,
        url: `https://www.youtube.com/embed/${videos[1]?.id?.videoId}`,
      },
      {
        id: videos[2]?.etag,
        url: `https://www.youtube.com/embed/${videos[2]?.id?.videoId}`,
      },
      {
        id: videos[3]?.etag,
        url: `https://www.youtube.com/embed/${videos[3]?.id?.videoId}`,
      },
      {
        id: videos[4]?.etag,
        url: `https://www.youtube.com/embed/${videos[4]?.id?.videoId}`,
      },
    ];
    
    const [responsiveVideoPlayer] = useMediaQuery("(min-width: 850px)");
    
    const [width, setWidth] = useState(0);
    const container = useRef();
    
    useEffect(() => {
        responsiveVideoPlayer && setWidth(
          container.current.scrollWidth - container.current.offsetWidth
        );
    }, [])
    
  return (
    <>
      {responsiveVideoPlayer ? (
        <MotionFlex
          m="8rem 3.5rem 3rem 3rem"
          cursor="grab"
          overflow="hidden"
          borderRadius="2rem"
          justifyContent="space-between"
          bg="#8c06f7"
          ref={container}
        >
          <MotionFlex
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            bg="#8c06f7"
          >
            {arr.map((el) => {
              return (
                <MotionBox key={el.id} p="70px" >
                  <ReactPlayer
                    controls
                    url={el.url}
                    width="640px"
                    height="360px"
                  />
                </MotionBox>
              );
            })}
          </MotionFlex>
        </MotionFlex>
      ) : (
        <SimpleGrid columns={{md: 2, lg: 2}} spacing={10} mt='10rem'>
          {arr.map((el) => {
            return (
              <MotionBox key={el.id}>
                <ReactPlayer
                  controls
                  url={el.url}
                  width={{md: "330px", lg: "365px"}}
                  height="210px"
                />
              </MotionBox>
            );
          })}
        </SimpleGrid>
      )}
    </>
  );
}

export default VideoPlayer;