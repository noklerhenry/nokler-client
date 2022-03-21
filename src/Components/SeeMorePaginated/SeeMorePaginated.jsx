import React, {useEffect, useState} from "react";
import { Box, Button } from "@chakra-ui/react";
import ProductCard from "../Card/Card";
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
            <Box>
            {gamesFiltered?.slice(0, visible).map((product, index) => {
                return (
                    <ProductCard
                        key={index}
                        id={product?.id}
                        image={product.game?.image}
                        name={product.game?.name}
                        store={product.store?.name}
                        price={product?.price}
                    />
                );
            })}
            <Button onClick={showMoreProducts}>+</Button>
            </Box>
        )
    }
}