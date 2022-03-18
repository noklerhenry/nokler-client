import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import {
  orderGamesByPrice,
  orderGamesByRelease,
  orderGamesByRating,
} from "../../Actions";

export default function Ordering() {
  const [value, setValue] = useState("0");
  const dispatch = useDispatch();

  function handleOrderRelease(e) {
    e.preventDefault();
    dispatch(orderGamesByRelease(e.target.value));
  }

  function handleOrderRating(e) {
    e.preventDefault();
    dispatch(orderGamesByRating(e.target.value));
  }

  function handleOrderPrice(e) {
    e.preventDefault();
    dispatch(orderGamesByPrice(e.target.value));
  }

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Order by Release
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <RadioGroup onChange={setValue} value={value}>
            <Stack onChange={(e) => handleOrderRelease(e)}>
              <Radio value="0">Default Order</Radio>
              <Radio value="1">Newest - Older</Radio>
              <Radio value="2">Older - Newest</Radio>
            </Stack>
          </RadioGroup>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Order by Rating
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <RadioGroup onChange={setValue} value={value}>
            <Stack onChange={(e) => handleOrderRating(e)}>
              <Radio value="0">Default Order</Radio>
              <Radio value="1">More Rating - Less Rating</Radio>
              <Radio value="2">Less Rating - More Rating</Radio>
            </Stack>
          </RadioGroup>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Order by Price
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <RadioGroup onChange={setValue} value={value}>
            <Stack onChange={(e) => handleOrderPrice(e)}>
              <Radio value="0">Default Order</Radio>
              <Radio value="1">Most Cheap - Most Expensive</Radio>
              <Radio value="2">Most Expensive - Most Cheap</Radio>
            </Stack>
          </RadioGroup>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
