import React, { Fragment } from "react";
import Filter from "../Filter/Filter";
import Footer from "../Footer/Footer";
import { Home } from "../Home";
import Latest from "../Latest/Latest";
import NavBar from "../NavBar";

export const FirstPage = () => {
  return (
    <Fragment>
      <NavBar />
      <Home />
      <Filter/>
      <Latest />
      <Footer />
    </Fragment>
  );
};
