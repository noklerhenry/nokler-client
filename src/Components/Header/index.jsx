import React, { useState } from "react";
import NavBar from "../NavBar";
import SideBar from "../NavBar/Sidebar";
import { useMediaQuery } from "@chakra-ui/react";

const Header = () => {
  const [Open, setOpen] = useState(false);
  
  const toggle = () => {
    setOpen(!Open);
  };
  
  const [mediaQueryNavMenu] = useMediaQuery("(max-width: 1180px)");
  return (
    <>
      <NavBar toggle={toggle} mediaQueryNavMenu={mediaQueryNavMenu} />
      <SideBar
        Open={Open}
        toggle={toggle}
        mediaQueryNavMenu={mediaQueryNavMenu}
      />
    </>
  );
};

export default Header;
