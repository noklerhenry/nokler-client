import React from "react";
import { Link } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";

export default function ProductCard({ id, image, name, store, price }) {
  return (
    <Box>
      <Link to={`/details/${name}`}>
        <Image src={image} alt={`${name}.jpg`} />
        <Box>
          `{name} - {store}`
        </Box>
      </Link>
      <Box>
        <Box>$ {price}</Box>
      </Box>
    </Box>
  );
}
