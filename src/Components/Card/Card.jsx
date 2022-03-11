import React from "react";
import { Link } from "react-router-dom";
import {Box, Image} from "@chakra-ui/react"

export default function Card({ id, image, name, platform, price, /* currency */}) {
  return (
    <Box>
      <Link to={`/detail/${id}`}>
        <Box>
          <Image src={image} alt={name} />
          <Box>
            `{name} - {platform}`
          </Box>
          <Box>
            `{price}{/* {currency} */}`
          </Box>
        </Box>
      </Link>
    </Box>
  );
}
