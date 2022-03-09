import React from "react";
import {
  GameResultsContainer,
  Thumbnail,
  GameName,
  Rating,
} from "./styleGamesResults.js";

const GamesResults = (props) => {
  const { thumbnailSrc, name, rating } = props;
  return (
      <>
        <GameResultsContainer>
          <Thumbnail>
            <img src={thumbnailSrc} alt="gameImg" />
          </Thumbnail>
          <GameName>{name}</GameName>
          <Rating>{rating}</Rating>
        </GameResultsContainer>
      </>
  );
};

export default GamesResults;
