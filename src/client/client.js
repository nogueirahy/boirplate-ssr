import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#app")
);

if (module.hot) {
  module.hot.dispose(function () {
    console.log("module.hot.dispose");
    // module is about to be replaced
  });

  module.hot.accept(function () {
    // module or one of its dependencies was just updated
    console.log("module.hot.accept");
  });
}
