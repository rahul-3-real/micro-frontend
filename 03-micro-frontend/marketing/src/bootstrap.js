import React from "react";
import ReactDom from "react-dom";

import App from "./App";

const mount = (el) => {
  ReactDom.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const app = document.querySelector("#__iso-marketing");
  if (app) {
    mount(app);
  }
}

export default mount;
