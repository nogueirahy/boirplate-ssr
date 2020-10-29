import { ErrorRequestHandler } from "express";

const errorMiddleware: ErrorRequestHandler = (_err, _req, res, next) => {
  res.status(500).end("Error 500 !");
  next();
};

export default errorMiddleware;
