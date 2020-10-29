import * as React from "react";
import { Request, Response, NextFunction, Handler } from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter as Router } from "react-router-dom";
import App from "../../../client/App";
import matchRoute from "../../utils/matchRouter";
import generateHtml from "./generateHtml";

const ssrMiddlware: Handler = async (req, res, next) => {
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

  try {
    const html = await generateHtml({ markup, preloadedState });
    res.send(html);
  } catch (err) {
    console.error("Something went wrong:", err);
    return res.status(500).end("Error 500 !");
  }
};

export default ssrMiddlware;
