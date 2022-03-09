import styled from "styled-components";

export const GameResultsContainer = styled.div`
  width: 93%;
  height: 2.2em;
  display: flex;
  border-bottom: 1px solid #d8d8d852;
  padding: 6px 8px;
  align-items: center;
  margin-top:30px;
  &:hover {
    border-bottom: 2px solid violet;
    height: 2em;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
`;

export const Thumbnail = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex: 0.6;

  img {
    width: auto;
    height: 100%;
  }
`;

export const GameName = styled.h3`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

export const Rating = styled.span`
  color: #a1a1a1;
  font-size: 16px;
  display: flex;
  flex: 0.5;
`;
