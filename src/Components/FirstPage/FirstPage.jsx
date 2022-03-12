import React, { Fragment } from "react";
import Footer from "../Footer/Footer";
import { Home } from "../Home";
import Latest from "../Latest/Latest";
import Header from '../Header'

export const FirstPage = () => {
  return (
    <Fragment>
      <Header />
      <Home />
      <Latest />
      <Footer />
    </Fragment>
  );
};
