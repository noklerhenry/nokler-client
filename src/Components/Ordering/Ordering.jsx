import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Select, useColorMode, useColorModeValue, } from "@chakra-ui/react";
import { orderBy } from "../../Actions";

export default function Ordering() {
  const dispatch = useDispatch();

  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("#efefef", "#18181880");

  const handleOrderBy = (event) => {
    event.preventDefault();
    dispatch(orderBy(event.target.value));
  };

  return (
    <Select
      onChange={(event) => handleOrderBy(event)}
      placeholder="Order by..."
      borderColor="#733EF8"
      bg={bg}
    >
      <option default value="HighRating">
        Rating: Most Popular
      </option>
      <option value="LowRating">Rating: Least Popular</option>
      <option value="HighPrice">Price: High to Low</option>
      <option value="LowPrice">Price: Low to High</option>
      <option value="NewRelease">Release Date: Newest</option>
      <option value="OldRelease">Release Date: Oldest</option>
      <option value="A-Z">Alphabet: A-Z</option>
      <option value="Z-A">Alphabet: Z-A</option>
    </Select>
  );
}
