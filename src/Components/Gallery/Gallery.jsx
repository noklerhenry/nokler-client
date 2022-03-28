import React, { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Card/Card";
import Filter from "../Filter/Filter";
import { getAllProducts } from "../../Actions";
import { Container, SimpleGrid } from "@chakra-ui/react";
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
    <Container mt="200px" mb="150px">
      <Filter />
      <Ordering />
      <SimpleGrid
        minChildWidth="250px"
        spacing="60px"
        backgroundImage=" linear-gradient(0deg, transparent 24%, rgba(140, 6, 247, .09) 25%, rgba(140, 6, 247, .09) 26%, transparent 27%, transparent 74%, rgba(140, 6, 247, .09) 75%, rgba(140, 6, 247, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(140, 6, 247, .09) 25%, rgba(140, 6, 247, .09) 26%, transparent 27%, transparent 74%, rgba(140, 6, 247, .09) 75%, rgba(140, 6, 247, .09) 76%, transparent 77%, transparent)"
        backgroundSize="24px 24px"
      >
        <SeeMorePaginated gamesFiltered={gamesFiltered} />
      </SimpleGrid>
    </Container>
  );
}
