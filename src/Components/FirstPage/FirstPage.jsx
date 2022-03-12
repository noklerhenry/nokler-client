import React, { Fragment } from "react";
import { Home } from "../Home";
import Latest from "../Latest/Latest";
import NavBar from "../NavBar";

export const FirstPage = () => {
  return (
    <Fragment>
      <NavBar />
      <Home />
      <Latest />
    </Fragment>
  );
};
