import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AppContainer,
  SearchBarContainer,
  SearchInputContainer,
  SearchIcon,
  SearchInput,
  CloseIcon,
  ButtonSearch,
  SearchContent,
  LineSeperator,
  LoadingWrapper,
  WarningMessage,
  AllResultsButton
} from "./styleSearchBar.js";
import { IoSearch, IoClose } from "react-icons/io5";
import { useClickOutside } from "react-click-outside-hook";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import FadeLoader from "react-spinners/FadeLoader";
import useDebounce from "./useDebounce";
import GamesResults from "./gamesResults";

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
  const [gamesLoaded, setGamesLoaded] = useState([]);
  const [noGamesFound, setNoGamesFound] = useState(false);

  const isEmpty = !gamesLoaded || gamesLoaded.length === 0;

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
      gamesLoaded?.splice(0, gamesLoaded.length);
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
  const prepareSearchQuery = (query) => {
    const api = `https://api.rawg.io/api/games?key=d063d7ea72004c9a8f9461144dd91d96&search=${query}&page_size=8`;
    return encodeURI(api);
  };

  // only is gonna running after the end of 500 milliseconds or in case the user stop typing
  const searchGame = async () => {
    if (!inputGame || inputGame.trim() === "") {
      return; // i'm not gonna continue whit this execution
    }
    setLoading(true);
    setNoGamesFound(false);

    const URL = prepareSearchQuery(inputGame);
    const response = await axios
      .get(URL)
      .catch((err) => console.log("Error Api Data: ", err));

    if (response) {
      console.log("Successful Response: ", response.data.results);
      setLoading(false);
      setGamesLoaded(response.data.results);
      if (response.data.results && response.data.results.length === 0) {
        setNoGamesFound(true);
      }
    } else {
      console.log("Empty Response: ", response.data.results);
      setLoading(false);
    }
  };

  useDebounce(inputGame, 500, searchGame);

  return (
    <AppContainer>
      <SearchBarContainer
        animate={expanded ? "expanded" : "collapse"}
        variants={containerVariants}
        transition={transitionContainer}
        ref={ref}
      >
        <SearchInputContainer>
          <SearchIcon>
            <ButtonSearch>
              <IoSearch />
            </ButtonSearch>
          </SearchIcon>
          <SearchInput
            placeholder="Search for Games"
            onFocus={expandContainer}
            value={inputGame}
            onChange={inputHandlerChange}
          />
          <AnimatePresence>
            {inputGame.length ? (
              <CloseIcon
                key="close-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={clearInput}
              >
                <IoClose />
              </CloseIcon>
            ) : null}
          </AnimatePresence>
        </SearchInputContainer>
        {expanded && <LineSeperator />}
        {expanded && (
          <SearchContent>
            {loading ? (
              <LoadingWrapper>
                <FadeLoader loading color="#000" size={50} />
              </LoadingWrapper>
            ) : null}
            {!loading && isEmpty && !noGamesFound && (
              <LoadingWrapper>
                <WarningMessage>Start Typing To Search</WarningMessage>
              </LoadingWrapper>
            )}
            {!loading && noGamesFound && (
              <LoadingWrapper>
                <WarningMessage>No Videogames Found</WarningMessage>
              </LoadingWrapper>
            )}
            {!loading && !isEmpty && (
              <>
                {gamesLoaded?.map((el, index) => {
                  return (
                    <GamesResults
                      key={index}
                      thumbnailSrc={
                        el.background_image
                          ? el.background_image
                          : "https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png"
                      }
                      name={el.name}
                      rating={
                        el.rating !== 0 ? "⭐" + el.rating + "⭐" : "No ratings"
                      }
                    />
                  );
                })}
                <AllResultsButton>See all results</AllResultsButton>
              </>
            )}
          </SearchContent>
        )}
      </SearchBarContainer>
    </AppContainer>
  );
};

export default SearchBar;
