import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterGamesByGenre,
  filterGamesByPlatform,
  filterGamesByStore,
  filterGamesByRegion,
  getGenres,
  getPlatforms,
  getStores,
} from "../../Actions";

import {
  Checkbox,
  CheckboxGroup,
  Stack,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Ordering from "../Ordering/Ordering";

export default function Filter() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  const stores = useSelector((state) => state.stores);
  const [ checkbox, setCheckbox ] = useState([]);

  //console.log(genres)

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    dispatch(getStores());
  }, []);

  useEffect(() => {
    dispatch(getPlatforms());
  }, []);

  useEffect(() => {
    dispatch(filterGamesByGenre(checkbox));
  }, [checkbox]);

  const handleChange = (e) => {
    e.preventDefault();
    let variable = e.target.value;
    let array = checkbox;
    if(array.includes(e.target.value)) {
      array = array.filter(e => e !== variable);
    } else {
      array.push(variable);
    }
    console.log(checkbox);
    setCheckbox(array);
  }

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Filter by Genre
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <CheckboxGroup colorScheme="purple">
            <Stack onChange={handleChange}>
              {genres?.map((g) => (
                <Checkbox key={g.name} value={g.name}>
                  {g.name}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Filter by Platform
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <CheckboxGroup colorScheme="purple">
            <Stack onChange={(e) => handleFilterPlatform(e)}>
              {platforms?.map((p) => (
                <Checkbox key={p.name} value={p.name}>
                  {p.name}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Filter by Store
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <CheckboxGroup colorScheme="purple">
            <Stack onChange={(e) => handleFilterStore(e)}>
              {stores?.map((s) => (
                <Checkbox key={s.name} value={s.name}>
                  {s.name}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </AccordionPanel>
      </AccordionItem>
      <Ordering />
    </Accordion>
  );
}
