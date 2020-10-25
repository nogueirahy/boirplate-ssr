import * as React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter as Router } from "react-router-dom";
import App from "../client/App";
import matchRoute from "./matchRouter";
import generateHtml from "./generateHtml";
import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
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
    return res.status(500).send("Oops, better luck next time!");
  }
};
