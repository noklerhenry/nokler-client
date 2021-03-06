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

  useEffect(() => {
    console.log(gamesFiltered.length);
  }, []);

  useEffect(() => {
    console.log(Number(visible));
  }, [visible]);

  return (
    <Flex flexDirection="column" marginBottom="100px">
      <SimpleGrid
        columns={{
          base: 1,
          sssm: 1,
          ssm: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 4,
        }}
        spacing={{
          base: "180px",
          sssm: "180px",
          ssm: "180px",
          sm: "80px",
          md: "80px",
          lg: "80px",
          xl: "80px",
        }}
      >
        {gamesFiltered?.slice(0, visible).map((product, index) => {
          return (
            <Card
              key={index}
              id={product?.id}
              image={product.game?.image}
              name={product.game?.name}
              store={product.store?.name}
              region={product?.region}
              price={product?.price}
              platform={product?.platform?.name}
              game={product?.game}
              arrayKey={product?.key}
            />
          );
        })}
      </SimpleGrid>
      {loading ? (
        <Flex
          align="center"
          justify="center"
          mt={{ base: "180px", sssm: "180px", ssm: "180px", sm: "110px" }}
        >
          <Loader />
        </Flex>
      ) : Number(gamesFiltered.length) <= Number(visible) ? null : (
        <Flex
          align="center"
          justify="center"
          mt={{ base: "180px", sssm: "180px", ssm: "180px", sm: "110px" }}
        >
          <Button onClick={showMoreProducts} h="25px" w="200px">
            Show More +
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
