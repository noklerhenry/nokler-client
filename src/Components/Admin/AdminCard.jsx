import React, { useState, useEffect } from "react";
import { Heading, Button, Text, Container, Box, Divider, Link, Image } from '@chakra-ui/react'


export default function AdminCard(props) {

    return(
      <>
      <Box borderRadius='20px' boxShadow='5px 5px 15px #cccccc' padding='15px 20px' mt='15px'>
        <Box display='flex' maxWidth='200px' flexDirection='row' flexWrap='wrap'>
        {props.genres.map(g =>(
          <Text float='left' borderRadius='15px' fontSize='10px' border='#999999 1px solid' padding='1px 8px' mr='2px' color='#999999' lineHeight='10px' mt='2px'>{g} </Text>
        ))}
        </Box>
        <Image src={props.image !== null ? props.image:'Image not found'} alt='image'h='135px'  borderRadius='15px' mt='15px'/>
        <Text fontSize='20px' mt='10px'>{props.name}</Text>
        <Button h='25px' mt='10px' fontSize='15px'><Link href={props.buttonlink}>{props.buttontext}</Link></Button>
        {props.buttondelete ? props.buttondelete : ''}
      </Box>
      </>
    )
}