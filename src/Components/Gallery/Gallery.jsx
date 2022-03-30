import React, { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Card/Card";
import Filter from "../Filter/Filter";
import { getAllProducts } from "../../Actions";
import { SimpleGrid, Flex, Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import SeeMorePaginated from "../SeeMorePaginated/SeeMorePaginated";
import Ordering from "../Ordering/Ordering";

export default function Gallery() {
  const dispatch = useDispatch();

  const gamesFiltered = useSelector((state) => state.gamesFiltered);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  console.log(gamesFiltered);

  return (
    <>
    <Heading fontSize='65px' mt='170px' fontWeight='400' ml='30px'>ALL GAMES</Heading>

    <Grid templateColumns="repeat(5, 1fr)" mt="0px" mb="20px" p='20px 0px' flexDirection='row'  backgroundImage="linear-gradient(0deg, transparent 24%, rgba(140, 6, 247, .09) 25%, rgba(140, 6, 247, .09) 26%, transparent 27%, transparent 74%, rgba(140, 6, 247, .09) 75%, rgba(140, 6, 247, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(140, 6, 247, .09) 25%, rgba(140, 6, 247, .09) 26%, transparent 27%, transparent 74%, rgba(140, 6, 247, .09) 75%, rgba(140, 6, 247, .09) 76%, transparent 77%, transparent)"
            backgroundSize="21px 21px">
      <GridItem colSpan={{ base: 5, md: 1, lg: 1, }}  ml='25px' >
        <Filter />
        <Ordering/>
      </GridItem>
      <GridItem colSpan={{ base: 5, md: 4, lg: 4, }} mt='30px'>
          <SeeMorePaginated
            gamesFiltered={gamesFiltered}
          />
      </GridItem>
    </Grid>
    </>
  );
}
