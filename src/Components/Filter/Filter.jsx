import React, {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import {    filterGamesByGenre, 
            filterGamesByPlatform, 
            filterGamesByStore, 
            filterGamesByRegion,   
            getGenres,
            getPlatforms,
            getStores   } from "../../Actions";

import {    Checkbox,
            CheckboxGroup, 
            Stack, 
            Box, 
            Accordion,
            AccordionItem,
            AccordionButton,
            AccordionPanel,
            AccordionIcon    } from "@chakra-ui/react";

            
export default function Filter () {
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres)
    const platforms = useSelector(state => state.platforms)
    const stores = useSelector(state => state.stores)

console.log(genres)

    useEffect(() => {
        dispatch(getGenres());
    }, [])


             
    function handleFilterPlatform(e){
        dispatch(filterGamesByPlatform(e.target.value))
    }

    function handleFilterStore(e){
        dispatch(filterGamesByStore(e.target.value))
    }

    function handleFilterRegion(e){
        dispatch(filterGamesByRegion(e.target.value))
    }

    function handleFilterGenre(e){
        e.preventDefault();
        dispatch(filterGamesByGenre(e.target.value))
    }
    
    return (
        <Accordion allowToggle>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                            Filter by Genre
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                </h2>
                <AccordionPanel>
                <CheckboxGroup colorScheme="purple">
                        <Stack  onChange={e => handleFilterGenre(e)}>
                            {genres?.map((g) => 
                                <Checkbox key={g.name} value={g.name}>{g.name}</Checkbox> 
                            )}
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
                        <AccordionIcon/>
                    </AccordionButton>
                </h2>
                <AccordionPanel>
                <CheckboxGroup colorScheme="purple" onChange={e => HandleFilterPlatform(e)}>
                        <Stack>
                            <Checkbox>PC</Checkbox>
                            <Checkbox>PlayStation</Checkbox>
                            <Checkbox>Xbox</Checkbox>
                            <Checkbox>Nintendo</Checkbox>
                            <Checkbox>VR</Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
            // <DrawerContent>
            //     <Button onClick={onClose} size="xs">
            //          Close filters
            //     </Button>
            //     <Box>
            //         <Heading as="h5" size="md">Filter by Platform</Heading>
                    
            //         <Heading as="h5" size="md">Filter by Store</Heading>
            //         <CheckboxGroup colorScheme="purple" onChange={e => handleFilterStore(e)}>
            //             <Stack>
            //                 <Checkbox value="Steam">Steam</Checkbox>
            //                 <Checkbox value="PlaystationNetwork">PlayStation Network</Checkbox>
            //                 <Checkbox>Microsoft Store</Checkbox>
            //                 <Checkbox>Nintendo eShop</Checkbox>
            //                 <Checkbox>Epic Store</Checkbox>
            //             </Stack>
            //         </CheckboxGroup>
            //         <Heading as="h5" size="md">Filter by Region</Heading>
            //         <CheckboxGroup colorScheme="purple" >
            //             <Stack>
                            
            //             </Stack>
            //         </CheckboxGroup>
            //         <Heading as="h5" size="md">Filter by Genre</Heading>
            //         <CheckboxGroup colorScheme="purple" >
            //             <Stack>
                            
            //             </Stack>
            //         </CheckboxGroup>
            //     </Box>
            // </DrawerContent>