import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

const obj = {
  x: 1,
};

ReactDOM.render(<App name="Me" goal={obj} />, document.getElementById("app"));
