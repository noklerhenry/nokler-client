import React, { Fragment } from "react";
import Footer from "../Footer/Footer";
import { Home } from "../Home";
import Latest from "../Latest/Latest";


export const FirstPage = () => {
  return (
    <Fragment>
      <Home />
      <Latest />
      <Footer />
    </Fragment>
  );
};
