import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
// import axios from "axios";
import { Box, Flex, Link } from "@chakra-ui/react";
import { IoSearch, IoClose } from "react-icons/io5";
import { useClickOutside } from "react-click-outside-hook";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";
import FadeLoader from "react-spinners/FadeLoader";
import useDebounce from "./useDebounce";
import GamesResults from "./gamesResults";
import { getGamesByName } from "../../Actions";


const MotionBox = motion(Box);
const MotionCloseIcon = motion(Box);

const containerVariants = {
  expanded: {
    height: "25em",
  },
  collapse: {
    height: "2.5em",
  },
};

const transitionContainer = {
  type: "spring",
  damping: 18,
  stiffness: 110,
};

const SearchBar = () => {
  const [inputGame, setInputGame] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ref, isClickedOutside] = useClickOutside();
//   const [gamesLoaded, setGamesLoaded] = useState([]);
  const [noGamesFound, setNoGamesFound] = useState(false);
  
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  
  useEffect(() => {
      console.log(products)
  }, [products])

//   const isEmpty = !gamesLoaded || gamesLoaded.length === 0;
  const isEmpty = !products || products.length === 0;

  const expandContainer = () => {
    setExpanded(true);
  };

  const collapseContainer = () => {
    setExpanded(false);
    setLoading(false);
    setNoGamesFound(false);
  };

  const inputHandlerChange = (e) => {
    e.preventDefault();
    setInputGame(e.target.value);
    if (e.target.value.trim() === "") {
      setNoGamesFound(false);
    }
    console.log(inputGame);
  };

  const clearInput = () => {
    setInputGame("");
    setExpanded(false);
    setLoading(false);
    setTimeout(() => {
    //   gamesLoaded?.splice(0, gamesLoaded.length);
      products?.splice(0, products.length);
    }, 1100);
    setNoGamesFound(false);
  };

  useEffect(() => {
    if (isClickedOutside) {
      // if it's true...
      collapseContainer();
    }
  }, [isClickedOutside]);

  // protect the url, denies any error of typing
//   const prepareSearchQuery = (query) => {
//     const api = `https://api.rawg.io/api/games?key=c22fa2939a1146329268dbae808c1722&search=${query}&page_size=8`;
//     return encodeURI(api);
//   };

  // only is gonna running after the end of 500 milliseconds or in case the user stop typing
  const searchGame = () => {
    if (!inputGame || inputGame.trim() === "") {
      return; // i'm not gonna continue whit this execution
    }
    setLoading(true);
    setNoGamesFound(false);

    // const URL = prepareSearchQuery(inputGame);
    dispatch(getGamesByName(inputGame))
    // const response = await axios
    //   .get(URL)
    //   .catch((err) => console.log("Error Api Data: ", err));

    // if (response) {
    //   console.log("Successful Response: ", response.data.results);
    //   setLoading(false);
    //   setGamesLoaded(response.data.results);
    //   if (response.data.results && response.data.results.length === 0) {
    //     setNoGamesFound(true);
    //   }
    // } else {
    //   console.log("Empty Response: ", response.data.results);
    //   setLoading(false);
    // }
    
    if(products.length){
        console.log("Successful Response: ", products);
        setLoading(false);
        // setGamesLoaded(game);
        if(products && products.length === 0){
            setNoGamesFound(true);
        }
    } else {
        console.log("Empty Response: ", products)
        setLoading(false)
    }
  };

  useDebounce(inputGame, 500, searchGame);

  return (
    <Box // AppContainer
      w="100%"
      h="100%"
      display="inline-block"
      justifyContent="left"
      mt="-15px"
      ml="-240px"
      pos="absolute"
    >
      <MotionBox // SearchBarContainer
        display="flex"
        flexDir="column"
        w={{
          base: "15em",
          sssm: "17em",
          ssm: "17em",
          sm: "17em",
          md: "20em",
          lg: "30em",
          xl: "30em",
        }}
        h="1.8em"
        bgColor="#fff"
        overflow="hidden"
        borderRadius="30px"
        boxShadow="0px 2px 12px 3px rgba(0, 0, 0, 0.14)"
        animate={expanded ? "expanded" : "collapse"}
        variants={containerVariants}
        transition={transitionContainer}
        ref={ref}
      >
        <Flex // SearchInputContainer
          w="110%"
          minH="2.3em"
          align="center"
          pos="relative"
          p="2px 15px"
        >
          <Box // SearchIcon
            as="span"
            color="#bebebe"
            fontSize="23px"
            mr="10px"
            mt="4px"
            verticalAlign="middle"
          >
            <Box // ButtonSearch
              as="button"
              border="none"
              bgColor="transparent"
              p="5px"
              fontSize="20px"
              _hover={{
                cursor: "pointer",
                color: "#a214c6",
                transition: "0.2s ease-in-out",
              }}
            >
              <IoSearch />
            </Box>
          </Box>
          <Box // SearchInput
            as="input"
            w="100%"
            h="105%"
            outline="none"
            border="none"
            fontSize="16px"
            color="#12112e"
            fontWeight="500"
            borderRadius="6px"
            bgColor="transparent"
            _focus={{ outline: "none" }}
            _placeholder={{
              color: "#bebebe",
              transition: "all 250ms ease-in-out ",
            }}
            // aca falta un _placeholder
            placeholder="Search for Games"
            onFocus={expandContainer}
            value={inputGame}
            onChange={inputHandlerChange}
          />
          <AnimatePresence>
            {inputGame.length ? (
              <MotionCloseIcon
                as="span"
                color="#bebebe"
                fontSize="23px"
                mr="45px"
                mt="4px"
                verticalAlign="middle"
                // transition='all 200ms ease-in-out'
                cursor="pointer"
                _hover={{ color: "red" }}
                key="close-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={clearInput}
              >
                <IoClose />
              </MotionCloseIcon>
            ) : null}
          </AnimatePresence>
        </Flex>
        {expanded && (
          <Flex // LineSeperator
            as="span"
            minW="100%"
            minH="2px"
            bgColor="#d8d8d878"
          />
        )}
        {expanded && (
          <Flex // SearchContent
            w="100%"
            h="100%"
            flexDir="column"
            p="1em"
            overflowY="auto"
          >
            {loading ? ( // LoadingWrapper
              <Flex w="100%" h="100%" align="center" justifyContent="center">
                <FadeLoader loading color="#000" size={50} />
              </Flex>
            ) : null}
            {!loading &&
              isEmpty &&
              !noGamesFound && ( // LoadingWrapper
                <Flex w="100%" h="100%" align="center" justifyContent="center">
                  <Flex // WarningMessage
                    as="span"
                    color="#a1a1a1"
                    fontSize="14px"
                    alignSelf="center"
                    justifySelf="center"
                  >
                    Start Typing To Search
                  </Flex>
                </Flex>
              )}
            {!loading &&
              noGamesFound && ( // LoadingWrapper
                <Flex w="100%" h="100%" align="center" justifyContent="center">
                  <Flex // WarningMessage
                    as="span"
                    color="#a1a1a1"
                    fontSize="14px"
                    alignSelf="center"
                    justifySelf="center"
                  >
                    No Videogames Found
                  </Flex>
                </Flex>
              )}
            {!loading && !isEmpty && (
              <>
                {/*gamesLoaded*/ products?.map((el, index) => {
                  return (
                    <Link href={'/details/' + el.game.name} >
                    <GamesResults
                      key={index}
                      thumbnailSrc={
                        el.game.image
                          ? el.game.image
                          : "https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png"
                      }
                      name={el.game.name}
                      rating={
                        (el.game.rating !== 0 || el.game.rating === undefined) ? "⭐" + el.game.rating + "⭐" : "⭐ - ⭐"
                      }
                    />
                    </Link>
                  );
                })}
                <Flex // AllResultsButton
                  as="button"
                  bgColor="#000"
                  color="#fff"
                  width="70%"
                  border="none"
                  p="8px"
                  mt="15px"
                  ml={["2rem", "2rem", "3rem", "3rem", "3rem", "4.5rem"]}
                  borderRadius="15px"
                  align="center"
                  justifyContent="center"
                  _hover={{
                    cursor: "pointer",
                    bgColor: "#A214C6",
                    transition: "0.3s ease-in-out",
                  }}
                >
                  {" "}
                  See all results{" "}
                </Flex>
              </>
            )}
          </Flex>
        )}
      </MotionBox>
    </Box>
  );
};

export default SearchBar;
