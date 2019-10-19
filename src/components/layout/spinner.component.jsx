import React from "react";
import SpinnerImage from "./spinner.gif";

const Spinner = () => (
  <React.Fragment>
    <img
      src={SpinnerImage}
      alt="spinner"
      style={{ width: "200px", margin: " auto", display: "block" }}
    />
  </React.Fragment>
);

export default Spinner;
