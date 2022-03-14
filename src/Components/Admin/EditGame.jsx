import React, { useState, useEffect } from "react";
import { useParams }  from 'react-router'
import AdminCard from "./AdminCard";
import axios from "axios";
import { Heading, Container, Text, FormControl, Box,  Divider, Input, Button, Link, FormLabel, Select, Image } from '@chakra-ui/react'


export default function EditGame() {
    let {id} = useParams()
    const [game, setGame] = useState('')
    const [input, setInput] = useState({
        "updateValues":{
            price: '',
            key: '',
            region: '',
            storeId: '',
            platformId: ''
        }
    })


    useEffect(() =>{
        axios.get('https://nokler-api.herokuapp.com/getProductById?ids=' + id)
      .then((response) =>{
        setGame(response.data)
        return response;
      })})

    let handleSubmit = async (e) => {
        e.preventDefault();
        const sendGame = await axios.put('https://nokler-api.herokuapp.com/edit/' + id, input)
        console.log('game edited')
        //history.push('/addgame')
    }

function onChange(event) {
    setInput({
        ...input,
        [event.target.name]: event.target.value
    })
}

function handleSelectStore(e){
    setInput({
        ...input, 
        store:  e.target.value,
    })
}

function handleSelectPlatform(e){
    setInput({
        ...input, 
        platform:  e.target.value,
    })
}

    return (
        <>
    <Container p='6'>
     <Heading mb='20px'>Welcome, Admin</Heading>
      <Button h='25px' mr='10px'><Link href='/admin'>Back to Admin panel</Link></Button>
      <Text fontSize='30px' mb='15px' mt='15px'>Edit game</Text>
      <Divider mb='20px'/>

      <Image src={game.img} w='200px' borderRadius='10px' float='right'/>
      <Heading fontSize='25px' fontWeight='400'>{game.name}</Heading>
      <Box display='flex' mt='10px'>
        {game.genres?.map(g =>(
          <Text float='left' borderRadius='15px' fontSize='10px' border='#777777 1px solid' padding='1px 8px' mr='2px' color='#444444' key={g.id}>{g} </Text>
        ))}
        </Box>
        <form onSubmit={handleSubmit}>
        <FormControl mt='45px'>
            <FormLabel htmlFor='price'>New Price</FormLabel>
            <Input borderRadius='20px' mb='15px' onChange={onChange} value={input.price} name="price" type="number" placeholder='$' step="0.01"></Input>

            <FormLabel htmlFor='key'>New Game Key</FormLabel>
            <Input borderRadius='20px' mb='15px' onChange={onChange} value={input.key} name="key" type="text" ></Input>

            <FormLabel htmlFor='region'>New Key Region</FormLabel>
            <Input borderRadius='20px' mb='15px' onChange={onChange} value={input.region} name="region" type="text"></Input>

            <FormLabel htmlFor='store' mt='10px'>New Game Store</FormLabel>
            <Select onChange={(e) => handleSelectStore(e)}>
                <option value='null'>Pick one</option>
                <option value='1'>Steam</option>
                <option value='2'>PlayStation Store</option>
                <option value='3'>Xbox Store</option>
                <option value='4'>App Store</option>
                <option value='5'>GOG</option>
                <option value='6'>Nintendo Store</option>
                <option value='7'>Xbox 360 Store</option>
                <option value='8'>Google Play</option>
                <option value='9'>Itch.io</option>
                <option value='10'>Epic Games</option>
            </Select>

            <FormLabel htmlFor='title' mt='15px'>New Platform</FormLabel>
            <Select onChange={(e) => handleSelectPlatform(e)}>
                <option value='null'>Pick one</option>
                <option value='1'>PC</option>
                <option value='2'>PlayStation 5</option>
                <option value='3'>PlayStation 4</option>
                <option value='4'>Xbox One</option>
                <option value='5'>Xbox Series S/X</option>
                <option value='6'>Nintendo Switch</option>
                <option value='7'>iOS</option>
                <option value='8'>Android</option>
                <option value='9'>Nintendo 3DS</option>
                <option value='10'>Nintendo DS</option>
                <option value='11'>Nintendo DSi</option>
                <option value='12'>macOS</option>
                <option value='13'>Linux</option>
                <option value='14'>Xbox 360</option>
                <option value='15'>Xbox</option>
                <option value='16'>PlayStation 3</option>
                <option value='17'>PlayStation 2</option>
                <option value='18'>PlayStation</option>
                <option value='19'>PS Vita</option>
                <option value='20'>PSP</option>
                <option value='21'>Wii U</option>
                <option value='22'>Wii</option>
                <option value='23'>GameCube</option>
                <option value='24'>Nintendo 64</option>
                <option value='25'>Game Boy Advance</option>
                <option value='26'>Game Boy Color</option>
                <option value='27'>Game Boy</option>
                <option value='28'>SNES</option>
                <option value='29'>NES</option>
                <option value='30'>Classic Macintosh</option>
                <option value='31'>Apple II</option>
                <option value='32'>Commodore / Amiga</option>
                <option value='33'>Atari 7800</option>
                <option value='34'>Atari 5200</option>
                <option value='35'>Atari 2600</option>
                <option value='36'>Atari Flashback</option>
                <option value='37'>Atari ST</option>
                <option value='38'>Atari Lynx</option>
                <option value='39'>Atari XEGS</option>
                <option value='40'>Genesis</option>
                <option value='41'>SEGA Saturn</option>
                <option value='42'>SEGA CD</option>
                <option value='43'>SEGA 32X</option>
                <option value='44'>SEGA Master System</option>

            </Select>
            <Button name='add' type='submit' mt='30px'>Edit Product</Button>
        </FormControl>
        </form>

    </Container>
        </>

    )
}