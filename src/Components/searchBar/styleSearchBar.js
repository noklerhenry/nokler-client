import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  justify-content: left;
  margin-top: -15px;
  margin-left: -240px;
  position: absolute;
`;

export const SearchBarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 30em;
  height: 1.8em; // animated property to expand or collapse with framer motion
  background-color: #fff;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  min-height: 2.3em;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 15px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 105%;
  outline: none;
  border: none;   
  font-size: 16px;
  color: #12112e;
  font-weight: 500;
  border-radius: 6px;
  background-color: transparent;
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;

export const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 23px;
  margin-right: 10px;
  margin-top: 4px;
  vertical-align: middle;
`;

export const CloseIcon = styled(motion.span)`
  color: #bebebe;
  font-size: 23px;
  margin-right: 30px;
  margin-top: 4px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export const ButtonSearch = styled.button`
  border: none;
  background-color: transparent;
  padding: 5px;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    color: #a214c6;
    transition: 0.2s ease-in-out;
  }
`;

export const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  overflow-y: auto;
`;

export const LineSeperator = styled.span`
  display: flex;
  min-width: 100%;
  min-height: 2px;
  background-color: #d8d8d878;
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WarningMessage = styled.span`
  color: #a1a1a1;
  font-size: 14px;
  display: flex;
  align-self: center;
  justify-self: center;
`;

export const AllResultsButton = styled.button`
  background-color: #000;
  color: #fff;
  width: 70%;
  border: none;
  padding: 8px;
  margin-top: 15px;
  margin-left: 5rem;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: #A214C6;
    transition: 0.3s ease-in-out;
  }
`;
