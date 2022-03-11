import React, {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import {    filterGamesByGenre, 
            filterGamesByPlatform, 
            filterGamesByStore, 
            filterGamesByRegion   } from "../../Actions";
import { Checkbox,
         CheckboxGroup, 
         Heading, 
         Stack, 
         Box, 
         useDisclosure, 
         Button, 
         DrawerBody, 
         Drawer, 
         DrawerContent,
         DrawerOverlay,
         DrawerHeader } from "@chakra-ui/react";

         
         
export default function Filter () {
    const dispatch = useDispatch();
    const [placement, setPlacement] = React.useState('left')
    const { isOpen, onOpen, onClose } = useDisclosure()
             
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
        dispatch(filterGamesByGenre(e.target.value))
    }
    
    return (
        <>
        <Button onClick={onOpen}>
            Open filters
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerHeader borderBottomWidth='5px'>Filters</DrawerHeader>
            <DrawerContent>
                <Button onClick={onClose} size="xs">
                     Close filters
                </Button>
                <Box>
                    <Heading as="h5" size="md">Filter by Platform</Heading>
                    <CheckboxGroup colorScheme="purple" onChange={e => HandleFilterPlatform(e)}>
                        <Stack>
                            <Checkbox>PC</Checkbox>
                            <Checkbox>PlayStation</Checkbox>
                            <Checkbox>Xbox</Checkbox>
                            <Checkbox>Nintendo</Checkbox>
                            <Checkbox>VR</Checkbox>
                        </Stack>
                    </CheckboxGroup>
                    <Heading as="h5" size="md">Filter by Store</Heading>
                    <CheckboxGroup colorScheme="purple" onChange={e => handleFilterStore(e)}>
                        <Stack>
                            <Checkbox value="Steam">Steam</Checkbox>
                            <Checkbox value="PlaystationNetwork">PlayStation Network</Checkbox>
                            <Checkbox>Microsoft Store</Checkbox>
                            <Checkbox>Nintendo eShop</Checkbox>
                            <Checkbox>Epic Store</Checkbox>
                        </Stack>
                    </CheckboxGroup>
                    <Heading as="h5" size="md">Filter by Region</Heading>
                    <CheckboxGroup colorScheme="purple" >
                        <Stack>
                            
                        </Stack>
                    </CheckboxGroup>
                    <Heading as="h5" size="md">Filter by Genre</Heading>
                    <CheckboxGroup colorScheme="purple" >
                        <Stack>
                            
                        </Stack>
                    </CheckboxGroup>
                </Box>
            </DrawerContent>
        </Drawer>
        </>
    )
}