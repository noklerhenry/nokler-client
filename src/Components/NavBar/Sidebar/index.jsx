import React from "react";
import { Link } from "react-router-dom";
import {
  useColorMode,
  Button,
  IconButton,
  Box,
  useMediaQuery,
  useColorModeValue
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { Logout } from "../../Logout.jsx";
import CartDrawer from "../CartDrawer.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { FaHome, FaUser, FaHeart, FaGamepad, FaDesktop  } from "react-icons/fa";

const SideBar = ({ Open, toggle }) => {
  const { loginWithPopup, isAuthenticated, isLoading, logout } = useAuth0();
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("#ffffff", "#121019");

  const [mediaQueryGrid480px] = useMediaQuery("(max-width: 480px)");
  

  return (
    <Box
      as="aside"
      isOpen={Open}
      pos="fixed"
      zIndex="999"
      w={["100%", "100%", "100%", "100%", "40%", "25%"]}
      h="100%"
      bg={bg}
      display="grid"
      alignItems="center"
      left={Open ? "0" : "-100%"}
      top="0"
      boxShadow='0px 15px 20px #cccccc'
      transition="0.3s ease-in-out"
      opacity={Open ? "100%" : "0"}
    >
      <Box
        pos="absolute"
        top="1.2rem"
        right="1.5rem"
        bg="transparent"
        fontSize="2rem"
        cursor="pointer"
        outline="none"
      >
        <IconButton
          aria-label="Close Menu"
          icon={<FaTimes color="#fff" fontSize="1.8rem" />}
          onClick={toggle}
          border="none"
          bg="#8c06f7"
        />
      </Box>
      <Box color="#fff">
        <Box
          as="ul"
          display="grid"
          gridTemplateColumns="1fr"
          gridTemplateRows={
            mediaQueryGrid480px ? "repeat(3, 60px)" : "repeat(3, 60px)"
          }
          textAlign="center"
        >
          <Box  w='90%' mt='10px'>
            <Link to="/">
              <Button mt="0px"  color="#8c06f7" border='none'fontSize='25px'fontWeight='300' onClick={toggle}
              >
                <FaHome size='21'/>&nbsp; Home
              </Button>
            </Link>
          </Box>
          <Box  w='90%' mt='10px'>
            <Link to="/gallery">
              <Button mt="0px"  color="#8c06f7" border='none'fontSize='25px'fontWeight='300' onClick={toggle}
              >
                <FaGamepad size='21'/>&nbsp; All games
              </Button>
            </Link>
          </Box>          
          
          
          <Box  w='90%' mt='10px'>
            <Link to="/whislist">
              <Button mt="0px"  color="#8c06f7" border='none'fontSize='25px'fontWeight='300' 
                onClick={toggle}
              >
                <FaHeart size='21'/>&nbsp;Wishlist
              </Button>
            </Link>
          </Box>

          <Box color='#8c06f7' w='90%' mt='10px'  mb='30px' ml='-15px'>
          <Button border='none'fontSize='25px'fontWeight='300'> <CartDrawer Open={Open} toggle={toggle} mt='-10px'/> Cart</Button>
            </Box>

          <Box  w='90%' mt='10px'>
            <Button mt="0px"  color="#8c06f7" fontSize='16px'fontWeight='300' h='22px'
              onClick={() => toggleColorMode()}
            >
              <FaDesktop size='16'/>&nbsp; Theme
            </Button>
          </Box>

          
          <Box w='90%' mt='10px'>
            {!isAuthenticated && !isLoading ? (
              <Button mt="0px"  color="#8c06f7" fontSize='16px'fontWeight='300' h='22px' 
              onClick={loginWithPopup}
              >
                <FaUser size='15'/>&nbsp; Sign in
              </Button>
            ) : (
              <Button mt="0px"  color="#8c06f7" fontSize='16px'fontWeight='300' h='22px'
              onClick={logout}
              >
              <FaUser size='15'/>&nbsp; Log Out
            </Button>
            )}
          </Box>
          
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
