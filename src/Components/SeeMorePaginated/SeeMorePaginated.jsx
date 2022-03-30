import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  SimpleGrid,
  Flex,
  Link,
  Heading,
  Image,
} from "@chakra-ui/react";
import ProductCard from "../Card/Card";
import { Card } from "../Card";
import Loader from "../Loader/Loader";

export default function SeeMorePaginated({ gamesFiltered }) {
  const [visible, setVisible] = useState(8);
  const [loading, setLoading] = useState(false);

  function showMoreProducts() {
    setLoading(true);
    setTimeout(() => {
      setVisible((prevValue) => prevValue + 8);
      setLoading(false);
    }, 1000);
  }

  return (
    <Flex flexDirection="column">
      <SimpleGrid
        columns={{ base: 2, md: 2, lg: 3, xl: 3, xxl: 4 }}
        spacing="20px"
      >
        {gamesFiltered?.slice(0, visible).map((product, index) => {
          return (
            <Card
              key={index}
              id={product?.id}
              image={product.game?.image}
              name={product.game?.name}
              store={product.store?.name}
              price={product?.price}
            />
          );
        })}
      </SimpleGrid>
      {loading ? (
        <Flex justifyContent="center" alignItems="center">
          <Loader />
        </Flex>
      ) : (
        <Flex justifyContent="center" alignItems="center">
          <Button onClick={showMoreProducts} h="25px" mt="70px" w="200px">
            Show More +
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
