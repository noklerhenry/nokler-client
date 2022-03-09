import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Actions";
import  { Button, useToast, Box, Image, Text, Heading } from "@chakra-ui/react";



export const Card = ({ id, name, price, image }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(addToCart(id));}

    const toast = useToast();
    
    const isClicked = () => {
      handleClick(id);
      
      toast({
        isClosable: false,
        title: 'Success!',
        description: 'Game added to Cart',
        duration: 5000,
        position: 'bottom-right',
        status: 'success'
      })
    };


  return (
    <Box margin='10px' w='290px'>
      <Image h='150px' src={image} alt="img not found" borderRadius='10px' boxShadow='5px 5px 15px #111111' mb='15px'/>
      <Button size='sm' height='15px' fontSize='11px' mt='5px'>CATEGORY</Button>
      <Heading fontSize='21px' fontWeight='300' textTransform='uppercase' mt='10px' mb='10px'>{name}</Heading>
      <Text fontSize='20px' mt='10px' mb='10px'>${price}</Text>
      <Button size='sm' height='24px'>
        See game
      </Button>
      <Button size='sm' height='24px' onClick={() => isClicked()}>
        +
      </Button>
    </Box>
  );
};
