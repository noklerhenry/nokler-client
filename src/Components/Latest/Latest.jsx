import React from "react";
import { Box, Flex, Heading, Button, Image } from "@chakra-ui/react";
import gta from "./gta.png";

export default function Latest() {
    return (  
        <>
        <Heading fontSize='55px' fontWeight='300' ml='20px' mt='50px'>FEATURED GAMES</Heading>
        <Flex w='100%' flexDirection='row' justifyContent='right' alignItems='center' wrap='wrap' backgroundImage=' linear-gradient(0deg, transparent 24%, rgba(140, 6, 247, .09) 25%, rgba(140, 6, 247, .09) 26%, transparent 27%, transparent 74%, rgba(140, 6, 247, .09) 75%, rgba(140, 6, 247, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(140, 6, 247, .09) 25%, rgba(140, 6, 247, .09) 26%, transparent 27%, transparent 74%, rgba(140, 6, 247, .09) 75%, rgba(140, 6, 247, .09) 76%, transparent 77%, transparent)' backgroundSize='25px 25px'>
        <Box flexBasis='40%'>
            <Heading fontSize='65px' fontWeight='300' lineHeight='60px'mb='30px' >GRAND THEFT<br/> AUTO V</Heading>
            <Button>Check it out &#8594;</Button>
        </Box>
        <Box flexBasis='50%'>
            <Image src={gta} alt='GTA V' width='100%'/>
        </Box>
    </Flex>
    </>
      )
}