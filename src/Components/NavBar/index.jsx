import React from "react";
import ImgLogo from "./Logo/footer_nokler_logo.png";
import SearchBar from "../searchBar/index";
import { Logout } from "../Logout.jsx";
import CartDrawer from "./CartDrawer.jsx";
// import { Profile } from "../Profile.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import {
  useColorMode,
  Button,
  Box,
  Image,
  Flex,
  useMediaQuery,
  IconButton,
} from "@chakra-ui/react";
// import Panel from "./Sidebar/panel";
import { FaBars } from "react-icons/fa";

const NavBar = ({ toggle, mediaQueryNavMenu }) => {
  const { user, loginWithPopup, isAuthenticated, isLoading } = useAuth0();

  const { colorMode, toggleColorMode } = useColorMode();

  const [mediaQueryNav] = useMediaQuery("(max-width: 960px)");
  const [mediaQueryIcon] = useMediaQuery("(max-width: 1180px)");
  const [mediaQueryIconSm] = useMediaQuery("(max-width: 330px)");

  //   console.log(user);

  return (
    <>
      <Flex
        as="nav"
        h={["140px", "140px", "140px", "90px", "90px", "90px"]}
        mt="-165px"
        justifyContent="space-between"
        fontSize="1rem"
        pos="sticky"
        top="0"
        zIndex="10"
        transition={mediaQueryNav ? "0.8s all ease" : null}
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
            <Image src={ImgLogo} alt="nokler logo" w="125px" h="35px" />
          </Flex>
          <Flex
            // display={mediaQueryIcon ? "block" : "none"}
            // pos={mediaQueryIcon ? "absolute" : null}
            // top={mediaQueryIcon ? "-5" : null}
            // right={mediaQueryIcon ? "-5" : null}
            // transform={mediaQueryIcon ? "translate(-100%, 80%)" : null}
            // fontSize={mediaQueryIcon ? "1.8rem" : null}
            // cursor={mediaQueryIcon ? "pointer" : null}
            // onClick={toggle}
            // w={mediaQueryIcon || mediaQueryIconSm ? "51%" : null}
            display="block"
            pos="absolute"
            top="-5"
            left="12"
            transform="translate(-100%, 80%)"
            fontSize="1.8rem"
            cursor="pointer"
            onClick={toggle}
            // w={mediaQueryIcon || mediaQueryIconSm ? "51%" : null}
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
              base: "17.7rem",
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
                right="17rem"
                padding="0 1rem"
                cursor="pointer"
              >
                <Button
                  size="sm"
                  mt="20px"
                  onClick={() => toggleColorMode()}
                >
                  Theme
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
                    ml="19px"
                    bgColor="#000"
                    onClick={loginWithPopup}
                  >
                    {" "}
                    Sign in
                  </Button>
                ) : (
                  <Logout />
                )}
              </Box>
              <Box
                pos="absolute"
                top="2"
                right="3.5rem"
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
    // <>
    //   <header>
    //     <Flex
    //       h="80px"
    //       alignItems="center"
    //       justifyContent="space-around"
    //       wrap="wrap"
    //       ml="15px"
    //       mr="15px"
    //       p="10px"
    //       position="fixed"
    //       w="95%"
    //       zIndex="1"
    //       mt="-150px"
    //     >
    //       <Box pos="fixed" w="95%" h='38px'>
    //         <Panel />
    //       </Box>
    //       <Box
    //         alignItems="center"
    //         mr="8rem"
    //         // ml={["-94px", "-25px", "-60px", "-50px", "16rem", "0"]}
    //         // pl={mediaQueryIconSm ? "0.5rem" : null}
    //       >
    //         <Image src={ImgLogo} alt="nokler logo" w="125px" h="35px" />
    //       </Box>
    //       <Box mr={mediaQuerySearchBar ? "150px" : "90px"}>
    //         <SearchBar />
    //       </Box>
    //       <Box>
    //         <Box d={mediaQueryNavMenu ? "none" : "inline-block"}>
    //           <Button size="sm" mt="20px" onClick={() => toggleColorMode()}>
    //             {" "}
    //             Theme
    //           </Button>
    //         </Box>
    //         <Box d={mediaQueryNavMenu ? "none" : "inline-block"}>
    //           {!isAuthenticated && !isLoading ? (
    //             <Button size="sm" mt="20px" ml="19px" onClick={loginWithPopup}>
    //               {" "}
    //               Sign in
    //             </Button>
    //           ) : (
    //             <Logout />
    //           )}
    //         </Box>
    //         <Box ml="15px" d={mediaQueryNavMenu ? "none" : "inline-block"}>
    //           <CartDrawer />
    //         </Box>
    //       </Box>
    //       {/* <Profile /> */}
    //     </Flex>
    //   </header>
    // </>
  );
};

export default NavBar;
