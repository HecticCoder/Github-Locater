import React, { Fragment } from "react";
import spinner from "./loading-gif.gif";

export const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "50px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
