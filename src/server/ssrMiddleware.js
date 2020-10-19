import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter as Router } from "react-router-dom";
import App from "../client/App";
import matchRoute from "./matchRouter";
import generateHtml from "./generateHtml";

export default async (req, res, next) => {
  const { component } = matchRoute(req.path);

  if (!component) {
    return next();
  }

  const context = {};

  const preloadedState = {};

  const markup = ReactDOMServer.renderToString(
    <Router location={req.url} context={context}>
      <App />
    </Router>
  );

  const html = generateHtml({ markup, preloadedState });
  res.send(html);
};
