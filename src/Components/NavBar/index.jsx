import React, { useState, useEffect } from "react";
//import { Link } from 'react-router-dom';
import ImgLogo from "./Logo/footer_nokler_logo.png";
import SearchBar from "../searchBar/index";
import CartDrawer from "./CartDrawer.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import {
  useColorMode,
  Button,
  Box,
  Link,
  Image,
  Flex,
  useMediaQuery,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Avatar,
  Center,
  MenuDivider,
  MenuItem,
  useColorModeValue
} from "@chakra-ui/react";
import { FaBars, FaUser } from "react-icons/fa";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, postUser } from "../../Actions";

const NavBar = ({ toggle, mediaQueryNavMenu }) => {
  const {
    user,
    loginWithPopup,
    loginWithRedirect,
    isAuthenticated,
    isLoading,
    logout,
  } = useAuth0();

  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("#ffffff", "#121019");

  const [mediaQueryNav] = useMediaQuery("(max-width: 960px)");
  const [mediaQueryIcon] = useMediaQuery("(max-width: 1180px)");
  const [mediaQueryIconSm] = useMediaQuery("(max-width: 330px)");

  const users = useSelector((state) => state.users.map((u) => u.email));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (user?.email) {
      const find = users.find((u) => u == user.email);
      !find && dispatch(postUser({email: user.email}));
    }
  }, [user]);

  const [backgroundNav, setBackgroundNav] = useState(false);

  const changeBackground = () => {
    window.scrollY >= 90 ? setBackgroundNav(true) : setBackgroundNav(false);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <Flex
        as="nav"
        h={["140px", "140px", "140px", "90px", "90px", "90px"]}
        mt="-150px"
        justifyContent="space-between"
        fontSize="1rem"
        pos="sticky"
        top="0"
        zIndex="10"
        transition={
          mediaQueryNav || backgroundNav || !backgroundNav
            ? "0.5s all ease"
            : null
        }
        bg={
          backgroundNav && colorMode === "dark"
            ? "#121019"
            : backgroundNav && colorMode === "light"
            ? "#ffffff"
            : ""
        }
      >
        <Flex
          justifyContent="space-between"
          h="80px"
          zIndex="1"
          w="100%"
          padding="0 24px"
          maxWidth="1100px"
        >
          <Flex
            alignItems="center"
            ml={mediaQueryIcon ? "2rem" : "3rem"}
            pl={mediaQueryIconSm ? "2.8rem" : null}
          >
            <Link href="/">
              <Image src={ImgLogo} alt="nokler logo" w="125px" h="35px" />
            </Link>
          </Flex>
          <Flex
            display="block"
            pos="absolute"
            top="-5"
            left="12"
            transform="translate(-100%, 80%)"
            fontSize="1.8rem"
            cursor="pointer"
            onClick={toggle}
          >
            <IconButton
              aria-label="Open Menu"
              border="none"
              fontSize="1.8rem"
              icon={<FaBars />}
            />
          </Flex>
          <Box
            pos="absolute"
            top={["5.3rem", "5.3rem", "5.3rem", "2.3rem", "2,3rem", "2,3rem"]}
            left={{
              base: "17.3rem",
              sssm: "19rem",
              ssm: "21.5rem",
              sm: "27.5rem",
              md: "28rem",
              lg: "31rem",
              xl: "34.5rem",
            }}
          >
            <SearchBar />
          </Box>
          <Flex
            as="ul"
            display={mediaQueryNavMenu ? "none" : "flex"}
            alignItems="center"
            listStyleType="none"
            textAlign="center"
          >
            <Flex as="li" h="80px">
            <Box
                pos="absolute"
                top="2"
                right="19.8rem"
                padding="0 1rem"
                cursor="pointer"
              >
                <Button
                  size="sm"
                  mt="20px"
                >
                  <Link href='/gallery'>All games</Link>
                </Button>
              </Box>

              <Box
                pos="absolute"
                top="2"
                right="14.2rem"
                padding="0 1rem"
                cursor="pointer"
              >
                <Button
                  size="sm"
                  mt="20px"
                  onClick={toggleColorMode}
                  border="none"
                >
                  {colorMode === "light" ? (
                    <MoonIcon fontSize="20" />
                  ) : (
                    <SunIcon fontSize="20" />
                  )}
                </Button>
              </Box>

              <Box
                pos="absolute"
                top="2"
                right="10rem"
                padding="0 1rem"
                cursor="pointer"
              >
                {!isAuthenticated && !isLoading ? (
                  <Button
                    size="sm"
                    mt="20px"
                    ml="14px"
                    border="none"
                    onClick={loginWithRedirect}
                  >
                    {" "}
                    <FaUser size="18" />
                  </Button>
                ) : (
                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded={"full"}
                      variant={"link"}
                      cursor={"pointer"}
                      minW={0}
                      mt="20px"
                      mr="1rem"
                      border="none"
                      outline="0"
                      boxShadow="0"
                      _focus={{ outline: "0", boxShadow: "0", border: "none" }}
                    >
                      <Avatar
                        size={"sm"}
                        src={
                          user
                            ? user.picture
                            : "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                    </MenuButton>
                    <MenuList alignItems={"center"} bgColor={bg} borderRadius='15px 0px 15px 15px' boxShadow='2px 2px 10px #8c06f750'>
                      <br />
                      <Center>
                        <Avatar
                          size={"2xl"}
                          src={
                            user
                              ? user.picture
                              : "https://avatars.dicebear.com/api/male/username.svg"
                          }
                        />
                      </Center>
                      <br />
                      <Center color="#8c06f7" padding='5px 15px' >
                        <p>Welcome <br/> <b>{` ${user ? user.name : "To Nøkler"}`}</b></p>
                      </Center>
                      <br />
                      
                      <Link href="/admin" _hover='#222222'>
                        <MenuItem >Admin Home</MenuItem>
                      </Link>
                      <Link href="/admin-products" _hover='#222222'>
                        <MenuItem >Manage Products</MenuItem>
                      </Link>
                      <Link href="/admin-users" _hover='#222222'>
                        <MenuItem >Manage Users</MenuItem>
                      </Link>
                      <Link href="/addgame"_hover='#222222'>
                        <MenuItem >Add Games</MenuItem>
                      </Link>
                      <MenuDivider />
                      <MenuItem onClick={() => logout()} _hover='#222222'>
                        Logout
                      </MenuItem>
                    </MenuList>
                  </Menu>
                )}
              </Box>
              <Box
                pos="absolute"
                top="2"
                right="6rem"
                padding="0 1rem"
                cursor="pointer"
              >
                <CartDrawer mediaQueryNavMenu={mediaQueryNavMenu} />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default NavBar;
