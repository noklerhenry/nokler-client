import React , {useEffect} from "react";
//import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Box, Image, Heading, AspectRatio, Text, Button} from "@chakra-ui/react"
import { getGameDetails, removeDetailCache } from "../../Actions";

export default function Detail() {

  const dispatch = useDispatch();
  const videogame = useSelector((state) => state.videogame);

  useEffect(() => {
      dispatch(getGameDetails(props.match.params.id));
      return () => {
          dispatch(removeDetailCache())
      }
  }, [dispatch])

  return (
    <Box>
      <Box>
        <Box>
          <Image
            src={videogame.background_image}
            alt={`${videogame.background_image}.jpg`}
          />
        </Box>

        <Heading> {videogame.name} </Heading>

        <Box>Platform: {videogame.platform}</Box>

        <Box>Region: {videogame.region}</Box>

        <Box>
          Digital key:
          <Box>This is a digital edition of the product (CD-KEY)</Box>
        </Box>

        <Box>OS: {videogame.os}</Box>

        <Box>
          <Box>
            Price:
            {videogame.price}
            <Button>Add to cart</Button>
          </Box>
          <Box>
            Premium price:
            {videogame.price}
            <Button>Get premium account pay less!</Button>
          </Box>
        </Box>

        <Heading>Screenshots Gallery</Heading>

        <AspectRatio title="Trailer" src={videogame.trailer}></AspectRatio>
        <Box>
          <Box>
            <Box>1 / 6</Box>
            <Image src={videogame.short_screenshots[1]} alt="Screenshot1.jpg" />
          </Box>

          <Box>
            <Box>2 / 6</Box>
            <Image src={videogame.short_screenshots[2]} alt="Screenshot2.jpg" />
          </Box>

          <Box>
            <Box>3 / 6</Box>
            <Image src={videogame.short_screenshots[3]} alt="Screenshot3.jpg" />
          </Box>

          <Box>
            <Box>4 / 6</Box>
            <Image src={videogame.short_screenshots[4]} alt="Screenshot4.jpg" />
          </Box>

          <Box>
            <Box>5 / 6</Box>
            <Image src={videogame.short_screenshots[5]} alt="Screenshot5.jpg" />
          </Box>

          <Box>6 / 6</Box>
          <Image src={videogame.short_screenshots[6]} alt="Screenshot6.jpg" />

          <a onclick="plusSlides(-1)" href="<">❮</a>
          <a onclick="plusSlides(1)" href=">">❯</a>

          <Box>
            <Text id="caption"></Text>
          </Box>

          <Box>
            <Box>
              <Image
                src={videogame.short_screenshots[1]}
                onclick="currentSlide(1)"
                alt="Screenshot1.jpg"
              />
            </Box>
            <Box>
              <Image
                src={videogame.short_screenshots[2]}
                onclick="currentSlide(2)"
                alt="Screenshot2.jpg"
              />
            </Box>
            <Box>
              <Image
                src={videogame.short_screenshots[3]}
                onclick="currentSlide(3)"
                alt="Screenshot3.jpg"
              />
            </Box>
            <Box>
              <Image
                src={videogame.short_screenshots[4]}
                onclick="currentSlide(4)"
                alt="Screenshot4.jpg"
              />
            </Box>
            <Box>
              <Image
                src={videogame.short_screenshots[5]}
                onclick="currentSlide(5)"
                alt="Screenshot5.jpg"
              />
            </Box>
            <Box>
              <Image
                src={videogame.short_screenshots[6]}
                onclick="currentSlide(6)"
                alt="Screenshot6.jpg"
              />
            </Box>
          </Box>
        </Box>

        <Box>
          Description:
          <Box>{videogame.description}</Box>
        </Box>

        <Box>
          System requirements:
          <Box>{videogame.system_requirements}</Box>
        </Box>
      </Box>
    </Box>
  );
}
