import React, { useState, useEffect } from "react";
import { useParams }  from 'react-router'
import AdminCard from "./AdminCard";
import axios from "axios";
import { Heading, Container, Text, FormControl, Box,  Divider, Input, Button, Flex, FormLabel, Select, Image, Switch, SimpleGrid, useColorMode, useColorModeValue } from '@chakra-ui/react'
import AdminHeader from "./AdminHeader";


export default function EditGame() {
    let {nameid} = useParams()
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

    const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue('#efefef', '#18181880')


    useEffect(() =>{
        axios.get('https://nokler-api.herokuapp.com/getProductByGame?game=' + nameid)
      .then((response) =>{
        setGame(response.data)
        return response;
      })
    }, [])

    let handleDelete = async (e) => {
        e.preventDefault();
        const sendGame = await axios.put('https://nokler-api.herokuapp.com/deletekeK/', input)
        console.log('key deleted')
        //history.push('/addgame')
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        const sendGame = await axios.post('https://nokler-api.herokuapp.com/product', input)
        console.log('Game Edited')
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
console.log(game)

    return (
        <>
    <Container p='6'>
     <AdminHeader />
        <Divider mt='20px' mb='20px'/>
      <Image src={game[0]?.game.image} w='200px' borderRadius='10px' float='right'/>
      <Heading fontSize='29px' fontWeight='400'>{game[0]?.game.name}</Heading>
      <Box display='flex' mt='10px'>
        {game[0]?.game.genres.map(g =>(
          <Text float='left' borderRadius='15px' fontSize='10px' border='#777777 1px solid' padding='1px 8px' mr='2px' color='#444444' key={g.id}>{g.name} </Text>
        ))}
        
        </Box>
        <FormControl mt='20px'>
        <FormLabel htmlFor='hide-product' mb='0'>
            Hide Product?
        </FormLabel>
        <Switch id='hide-product' mb='15px'/>
        </FormControl>
        
        <Box>
            <Text fontSize='25px' mt='20px'>Available keys</Text>
            <Divider mt='10px' mb='10px'/>
        <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1 }} mb='20px'>
            {game ? game.map((g) => (
              <Flex key={g.id} bg={bg}  padding='14px' borderRadius='20px' alignItems='center' justifyContent='space-between'>
              <Box mr='20px'>
              <Text  mt='-7px'><Text fontSize='7px'>STORE</Text> {g.store.name}</Text>
              <Text mt='-3px'> <Text fontSize='7px'>PLATFORM</Text>{g.platform.name}</Text>
              </Box>
              <Box mr='20px'>
              <Text mt='-3px'> <Text fontSize='7px'>REGION</Text>{g.region}</Text>
              <Text mt='-3px'> <Text fontSize='7px'>KEYS</Text></Text>
              {g.key.map((k) =>(
                  <p>{JSON.stringify(k.value)}</p>
              ))}
              </Box>
              <Text fontSize='22px'><Text fontSize='7px'>PRICE</Text>$ {g.price}</Text>
              <Button
                    onClick={() => {
                      handleDelete(g.id);
                    }}
                    ml="4"
                    bg='none'
                    padding='1px 7px'
                    h='22px'
                    fontSize='14px'
                  >
                    Delete Key
                  </Button>
              </Flex>
            )) : 'loading'}
            </SimpleGrid>

        </Box>

        <Text fontSize='25px' mt='60px'>Add new key</Text>
            <Divider mt='10px' mb='10px'/>
        <form onSubmit={handleSubmit}>
        <FormControl mt='45px'>
        
            <FormLabel htmlFor='price'>Price</FormLabel>
            <Input borderRadius='20px' mb='15px' onChange={onChange} value={input.price} name="price" type="number" placeholder='$' step="0.01"></Input>

            <FormLabel htmlFor='key'>Game Key</FormLabel>
            <Input borderRadius='20px' mb='15px' onChange={onChange} value={input.key} name="key" type="text" ></Input>

            <FormLabel htmlFor='region'>Key Region</FormLabel>
            <Input borderRadius='20px' mb='15px' onChange={onChange} value={input.region} name="region" type="text"></Input>

            <FormLabel htmlFor='store' mt='10px'>Game Store</FormLabel>
            <Select onChange={(e) => handleSelectStore(e)} borderRadius='20px'>
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

            <FormLabel htmlFor='title' mt='15px'>Platform</FormLabel>
            <Select onChange={(e) => handleSelectPlatform(e)} borderRadius='20px'>
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
            <Button name='add' type='submit' mt='30px'>Add New Key</Button>
        </FormControl>
        </form>

    </Container>
        </>

    )
}