import React, { Fragment } from "react";
import Footer from "../Footer/Footer";
import { Home } from "../Home";
import Latest from "../Latest/Latest";
import NavBar from "../NavBar";

export const FirstPage = () => {
  return (
    <Fragment>
      <NavBar />
      <Home />
      <Latest />
      <Footer />
    </Fragment>
  );
};
