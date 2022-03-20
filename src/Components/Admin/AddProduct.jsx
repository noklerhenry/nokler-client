import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
import { useParams }  from 'react-router'
import axios from "axios";
import { Heading, Container, Text, FormControl, FormLabel, Box,  Divider, Input, Button, Link, Image, Select, useToast } from '@chakra-ui/react'
import AdminHeader from "./AdminHeader";



export default function AddProduct() {

   // let history = useHistory()
    let {id} = useParams()
    const [game, setGame] = useState('')

    const [keys, setKeys] = useState([{key: ''}])


    const [input, setInput] = useState({
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
    
    useEffect(() =>{
        axios.get('https://nokler-api.herokuapp.com/details/' + id)
      .then((response) =>{
        setGame(response.data)
        return response;
      })
      .then((response2) =>{
          console.log(response2)
        setInput({
            ...input,
            game: {
                id: response2.data.id,
                name: response2.data.name,
                released: response2.data.released,
                name: response2.data.name,
                rating: response2.data.rating,
                description: response2.data.description,
                img: response2.data.img,
                genres: response2.data.genres,
                platform: response2.data.platform,
                screenshots: response2.data.screenshots,
                }
        })
      })
    }, [id])

    let handleSubmit = async (e) => {
        e.preventDefault();
        const sendGame = await axios.post('https://nokler-api.herokuapp.com/product', input)
        console.log('Game Created')
        //history.push('/addgame')
    }

    function onChange(event) {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
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
    }
    
    //console.log(game)
    console.log(input)
return(
    <>
    <Container p='6'>
     <AdminHeader />
     <Text fontSize='30px' mb='15px' mt='15px'>Add new Game</Text>

      <Image src={game.img} w='200px' borderRadius='10px' float='right'/>
      <Heading fontSize='25px' fontWeight='400'>{game.name}</Heading>
      <Box display='flex' mt='10px'>
        {game.genres?.map(g =>(
          <Text float='left' borderRadius='15px' fontSize='10px' border='#777777 1px solid' padding='1px 8px' mr='2px' color='#444444' key={g.id}>{g} </Text>
        ))}
        </Box>


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
            
            {/* <Text color='#777777' fontSize='14px' mt='10px'>
            {keys.length > 1 ? keys.map(e => (
                {e}
            )): 'No keys added'}
            </Text> */}

            <FormLabel htmlFor='region' mt='15px'>Key Region</FormLabel>
            <Input borderRadius='20px' mb='15px' onChange={onChange} value={input.region} name="region" type="text"></Input>

            <FormLabel htmlFor='store' mt='10px'>Game Store</FormLabel>
            <Select onChange={(e) => handleSelectStore(e)}>
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
            <Select onChange={(e) => handleSelectPlatform(e)}>
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
            <Button name='add' type='submit' mt='30px'>Add Product</Button>
        </FormControl>
        </form>

    </Container>
    </>
)

}