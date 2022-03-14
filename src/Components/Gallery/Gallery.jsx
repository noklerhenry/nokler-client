import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Cards } from "../Cards";
import Filter from "../Filter/Filter";
import { Container, SimpleGrid } from "@chakra-ui/react";

export default function Gallery() {
  return (
    <Container mt="200px" mb="150px">
      <SimpleGrid>
        <Filter />
        <Cards />
      </SimpleGrid>
    </Container>
  );
}
