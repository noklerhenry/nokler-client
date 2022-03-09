import styled from "styled-components";
import { FaUser, FaShoppingCart } from "react-icons/fa";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -45px;
  margin-right: 13rem;
`;

export const UserIconContainer = styled.div`
  display: flex;
  position: absolute;
  top: -14px;
  right: 9.2rem;
  align-items: center;
  padding-top: 30px;
`;

export const ShopIconContainer = styled.div`
  display: flex;
  position: absolute;
  top: -14px;
  right: 5.7rem;
  align-items: center;
  padding-top: 30px;
`;

export const ButtonUser = styled.button`
  background-color: #282727;
  padding: 10px;
  border-radius: 20px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonShop = styled.button`
  background-color: #282727;
  padding: 10px;
  border-radius: 30px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const UserIcon = styled(FaUser)`
  color: #fff;
  font-size: 20px;
  margin-top: 3px;

  &:hover {
    color: #df27ec;
    transition: 0.1s ease-in-out;
  }
`;

export const ShopIcon = styled(FaShoppingCart)`
  color: #fff;
  font-size: 20px;
  margin-right: 2px;
  margin-top: 3px;

  &:hover {
    color: #df27ec;
    transition: 0.1s ease-in-out;
  }
`;

export const UserSpan = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin: 0 10px;
`;
