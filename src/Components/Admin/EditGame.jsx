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

    const [keys, setKeys] = useState([{key: ''}])

    const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue('#efefef', '#18181880')


    useEffect(() =>{
        axios.get('https://nokler-api.herokuapp.com/getProductByGame?game=' + nameid)
      .then((response) =>{
        setGame(response.data)
        return response;
      })
      .then((response2) =>{
        //console.log(response2)
      setNewInput({
          ...newInput,
          game: {
              id: response2.data[0].game.id,
              name: response2.data[0].game.name,
              released: response2.data[0].game.released_at,
              name: response2.data[0].game.name,
              rating: response2.data[0].game.rating,
              description: response2.data[0].game.description,
              img: response2.data[0].game.image,
              genres: response2.data[0].game.genres,
              platform: response2.data[0].platform,
              screenshots: response2.data[0].game.screenshots,
              }
      })
    })
    }, [])


    const [newInput, setNewInput] = useState({
        price: '',
        key: keys,
        store: '',
	    platform: '',
	    userId: 1,
	    region: '',
	  game: {
		id: '',
		name: '',
		released: '',
		rating:  '',
        description:  '',
        img:  '',
        genres: '',
        platform: '',
        screenshots: '',
        }
    }) 

    async function handleDelete (productId){
        const sendGame = await axios.delete('https://nokler-api.herokuapp.com/delete/' + productId)
        console.log('key deleted')
        //history.push('/addgame')
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        const sendGame = await axios.post('https://nokler-api.herokuapp.com/product', newInput)
        console.log('Key Added')
        //history.push('/addgame')
    }

function onChange(event) {
    setNewInput({
        ...newInput,
        [event.target.name]: event.target.value
    })
}

function handleSelectStore(e){
    setNewInput({
        ...newInput, 
        store:  e.target.value,
    })
}

function handleSelectPlatform(e){
    setNewInput({
        ...newInput, 
        platform:  e.target.value,
    })
}

function addKey(){
    setKeys([...keys, {key: ''}])
    //e.preventDefault();
    //addedKeys.push(input.key);
}

function handleKeyChange(e, index){
    const {name, value} = e.target;
    const list = [...keys];
    list[index][name] = value;
    setKeys(list)
    setInput({
        ...input, 
        key: list,
    })
}


console.log('soy game:', game)
console.log(newInput)

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
        {/* <FormControl mt='20px'>
        <FormLabel htmlFor='hide-product' mb='0'>
            Hide Product?
        </FormLabel>
        <Switch id='hide-product' mb='15px'/>
        </FormControl> */}
        
        <Box>
            <Text fontSize='25px' mt='55px'>Available keys</Text>
            <Divider mt='10px' mb='10px'/>
        <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1 }} mb='20px'>
            {game ? game.map((g) => (
              <Flex key={g.id} bg={bg}  padding='14px' borderRadius='20px' alignItems='center' justifyContent='space-between' mt='15px'>
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
            {keys.map((singlekey, index) => (
                <div key={index}>
                <Input borderRadius='20px' mb='15px' onChange={(e) => handleKeyChange(e, index)} value={singlekey.key} name="key" type="text" ></Input>
                

                 {keys.length -1 === index && (<Button type='button' h='20px' fontSize='13px' border='none' bg='#eaeaea' onClick={() => addKey()}> Add game Key</Button>)} 
                
                </div>

            ))}





            {/* <Input borderRadius='20px' mb='15px' onChange={onChange} value={input.key} name="key" type="text" ></Input> */}

            <FormLabel htmlFor='region'>Key Region</FormLabel>
            <Input borderRadius='20px' mb='15px' onChange={onChange} value={input.region} name="region" type="text"></Input>

            <FormLabel htmlFor='store' mt='10px'>Game Store</FormLabel>
            <Select onChange={(e) => handleSelectStore(e)} borderRadius='20px'>
            <option value='null'>Pick one</option>
                <option value='PlayStation Store'>PlayStation Store</option>
                <option value='Epic Games'>Epic Games</option>
                <option value='Steam'>Steam</option>
                <option value='Xbox 360 Store'>Xbox 360</option>
                <option value='Xbox Store'>Xbox Store</option>
                <option value='App Store'>App Store</option>
                <option value='Google Play'>Google Play</option>
                <option value='Itch.io'>Itch.io</option>
                <option value='GOG'>GOG</option>
                <option value='Nintendo Store'>Nintendo Store</option>
            </Select>

            <FormLabel htmlFor='title' mt='15px'>Platform</FormLabel>
            <Select onChange={(e) => handleSelectPlatform(e)} borderRadius='20px'>
            <option value='null'>Pick one</option>
                <option value='PC'>PC</option>
                <option value='PlayStation 5'>PlayStation 5</option>
                <option value='PlayStation 4'>PlayStation 4</option>
                <option value='Xbox One'>Xbox One</option>
                <option value='Xbox Series S/X'>Xbox Series S/X</option>
                <option value='Nintendo Switch'>Nintendo Switch</option>
                <option value='iOS'>iOS</option>
                <option value='Android'>Android</option>
                <option value='Nintendo 3DS'>Nintendo 3DS</option>
                <option value='Nintendo DS'>Nintendo DS</option>
                <option value='Nintendo DSi'>Nintendo DSi</option>
                <option value='macOS'>macOS</option>
                <option value='Linux'>Linux</option>
                <option value='Xbox 360'>Xbox 360</option>
                <option value='Xbox'>Xbox</option>
                <option value='PlayStation 3'>PlayStation 3</option>
                <option value='PlayStation 2'>PlayStation 2</option>
                <option value='PlayStation'>PlayStation</option>
                <option value='PS Vita'>PS Vita</option>
                <option value='PSP'>PSP</option>
                <option value='Wii U'>Wii U</option>
                <option value='Wii'>Wii</option>
                <option value='GameCube'>GameCube</option>
                <option value='Nintendo 64'>Nintendo 64</option>
                <option value='Game Boy Advance'>Game Boy Advance</option>
                <option value='Game Boy Color'>Game Boy Color</option>
                <option value='Game Boy'>Game Boy</option>
                <option value='SNES'>SNES</option>
                <option value='NES'>NES</option>
                <option value='Classic Macintosh'>Classic Macintosh</option>
                <option value='Apple II'>Apple II</option>
                <option value='Commodore / Amiga'>Commodore / Amiga</option>
                <option value='Atari 7800'>Atari 7800</option>
                <option value='Atari 5200'>Atari 5200</option>
                <option value='Atari 2600'>Atari 2600</option>
                <option value='Atari Flashback'>Atari Flashback</option>
                <option value='Atari ST'>Atari ST</option>
                <option value='Atari Lynx'>Atari Lynx</option>
                <option value='Atari XEGS'>Atari XEGS</option>
                <option value='Genesis'>Genesis</option>
                <option value='SEGA Saturn'>SEGA Saturn</option>
                <option value='SEGA CD'>SEGA CD</option>
                <option value='SEGA 32X'>SEGA 32X</option>
                <option value='SEGA Master System'>SEGA Master System</option>

            </Select>
            <Button name='add' type='submit' mt='30px'>Add New Key</Button>
        </FormControl>
        </form>

    </Container>
        </>

    )
}