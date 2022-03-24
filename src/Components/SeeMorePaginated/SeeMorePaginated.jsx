import React, {useEffect, useState} from "react";
import { Box, Button, SimpleGrid, Flex, Link, Heading, Image } from "@chakra-ui/react";
import ProductCard from "../Card/Card";
import { Card } from "../Card";
import Loader from "../Loader/Loader";

export default function SeeMorePaginated({gamesFiltered}) {
    const [visible, setVisible] = useState(4);
    const [loading, setLoading] = useState(false)

    function showMoreProducts() {
        setVisible((prevValue) => prevValue + 4)
        setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 1000)
    };
    if(loading){
        return (
            <Loader/>
        )
    }else {
        return(
            <Flex flexDirection='column' >
            <SimpleGrid columns={{ base: 1, md: 2, lg: 2, xl:4 }} spacing="20px" >
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
            <Button onClick={showMoreProducts} h='25px' mt='20px' w='200px'>Show More +</Button>
            </Flex>
        )
    }
}