import React from "react";
import ImgLogo from "./Logo/footer_nokler_logo.png";
import SearchBar from "../searchBar/index";
import {Logout} from "../Logout.jsx";
import CartDrawer from "./CartDrawer.jsx";
import { Profile } from "../Profile.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { useColorMode, Button, Box, Image, Flex } from "@chakra-ui/react";

const NavBar = () => {
  const { user, loginWithPopup, isAuthenticated, isLoading } = useAuth0();

  const {colorMode, toggleColorMode} = useColorMode();

  console.log(user);


  return (
    <>

    <header>
      <Flex d='flex' alignItems='center' justifyContent='space-around' wrap='wrap' ml='15px' mr='15px' padding='10px' position='fixed' w='95%' h='90px' zIndex='200' mt='-150px'>

        <Box><Image src={ImgLogo} alt="nokler logo" w="125px" h="35px" /></Box>
        <Box box-size='90px'>
          <SearchBar />
        </Box>
        <Box d='flex' >
            <Box>
              <Button size='sm' mt='20px' onClick={() => toggleColorMode()} > Theme</Button>
            </Box>
            <Box>
              {!isAuthenticated && !isLoading ? <Button size='sm' mt='20px' ml='9px' onClick={loginWithPopup}> Sign in</Button> : <Logout />}
            {/* <Button size='sm' mt='20px' onClick={loginWithRedirect}> Sign in</Button> */}
            </Box>
            <Box>
            {/* <Logout /> */}
            </Box>
            <Box><CartDrawer/></Box>
        </Box>
        <Profile /> 

      </Flex>
    </header>

  
    
    </>
  );
};

export default NavBar;
