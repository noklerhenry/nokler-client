import React from "react";
import { Link } from 'react-router-dom';
import {
  Box,
  chakra,
  Container,
  Stack,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import ImgLogo from "../../Components/NavBar/Logo/footer_nokler_logo.png";


const SocialButton = ({ children, label, href }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <chakra.button
      
      bg='#121019'
      color="#fff"
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={
        label === "Twitter"
          ? { bg: "#47BCFF", color: "#fff" }
          : label === "YouTube"
          ? { bg: "#FF0000", color: "#fff" }
          : { bg: "#E617D9", color: "#fff" }
      }
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box color={colorMode === 'light' ? '#000' : '#fff'}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Image src={ImgLogo} alt="nokler logo" w="125px" h="35px" />
        <Stack direction={"row"} spacing={6}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/frecuent-questions'>FAQs</Link>
          <Link to='/contact'>Contact</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Nøkler. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter bg='#cccccc' />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}