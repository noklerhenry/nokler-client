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
  filterAcum,
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

export default function Filter() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  const stores = useSelector((state) => state.stores);
  const [genre, setGenre] = useState([]);
  const [platform, setPlatform] = useState([]);
  const [region, setRegion] = useState([]);
  const [store, setStore] = useState([]);

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

  // useEffect(() => {
  //   dispatch(filterGamesByGenre(checkbox));
  // }, [checkbox]);

  // const handleChange = (e) => {
  //   let variable = e.target.value;
  //   let array = checkbox;
  //   if(array.includes(e.target.value)) {
  //     array = array.filter(e => e !== variable);
  //   } else {
  //     array = [...array, variable];
  //   }
  //   console.log(checkbox);
  //   setCheckbox(array);
  // }

  useEffect(() => {
    dispatch(filterAcum(genre, platform, region, store));
  }, [genre, platform, region, store]);

  const handleGenre = (e) => {
    let variable = e.target.value;
    let array = genre;
    if (array.includes(e.target.value)) {
      array = array.filter((e) => e !== variable);
    } else {
      array = [...array, variable];
    }
    setGenre(array);
    console.log(genre);
  };

  const handlePlatform = (e) => {
    let variable = e.target.value;
    let array = platform;
    if (array.includes(e.target.value)) {
      array = array.filter((e) => e !== variable);
    } else {
      array = [...array, variable];
    }
    setPlatform(array);
    console.log(platform);
  };

  const handleStore = (e) => {
    let variable = e.target.value;
    let array = store;
    if (array.includes(e.target.value)) {
      array = array.filter((e) => e !== variable);
    } else {
      array = [...array, variable];
    }
    setStore(array);
    console.log(store);
  };

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
            <Stack onChange={handleGenre}>
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
            <Stack onChange={handlePlatform}>
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
            <Stack onChange={handleStore}>
              {stores?.map((s) => (
                <Checkbox key={s.name} value={s.name}>
                  {s.name}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
