import React from "react";
import { Link } from "react-router-dom";
import {
  useColorMode,
  Button,
  IconButton,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { Logout } from "../../Logout.jsx";
import CartDrawer from "../CartDrawer.jsx";
import { useAuth0 } from "@auth0/auth0-react";

const SideBar = ({ Open, toggle }) => {
  const { loginWithPopup, isAuthenticated, isLoading } = useAuth0();
  const { colorMode, toggleColorMode } = useColorMode();

  const [mediaQueryGrid480px] = useMediaQuery("(max-width: 480px)");
  

  return (
    <Box
      as="aside"
      isOpen={Open}
      pos="fixed"
      zIndex="999"
      w={["100%", "100%", "100%", "100%", "40%", "25%"]}
      h="100%"
      bg="#0d0d0d80"
      display="grid"
      alignItems="center"
      left={Open ? "0" : "-100%"}
      top="0"
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
          bg="#0d0d0d"
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
          <Box borderBottom='1px dotted #ffffff' w='90%' mt='10px'>
            <Link to="/">
              <Button
                mt="0px"
                bgColor="#ffffff00"
                color="#ffffff"
                border='none'
                fontSize='25px'
                fontWeight='700'
                onClick={toggle}
              >
                Home
              </Button>
            </Link>
          </Box>
          <Box borderBottom='1px dotted #ffffff' w='90%' mt='10px'>
            <Button
              mt="0px"
              bgColor="#ffffff00"
                color="#ffffff"
                border='none'
                fontSize='25px'
                fontWeight='700'
              onClick={() => toggleColorMode()}
            >
              Theme
            </Button>
          </Box>
          
          <Box borderBottom='1px dotted #ffffff' w='90%' mt='10px'>
            <Link to="/whislist">
              <Button
                mt="0px"
                bgColor="#ffffff00"
                color="#ffffff"
                border='none'
                fontSize='25px'
                fontWeight='700'
                onClick={toggle}
              >
                Wishlist
              </Button>
            </Link>
          </Box>
          <Box mr="7px">
            <Box>
            </Box>
          </Box>
          <Box>
              <CartDrawer Open={Open} toggle={toggle} />
            {!isAuthenticated && !isLoading ? (
              <Button
                size="sm"
                mt='20px'
                ml='9px'
                // ml="9px"
                bgColor="#ffffff"
                color="#222222"
                onClick={loginWithPopup}
              >
                Sign in
              </Button>
            ) : (
                <Box 
                  size="sm" 
                  mt="100px"
                >
                    <Logout />
                </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
