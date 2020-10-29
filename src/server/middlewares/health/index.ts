import { RequestHandler } from "express";

const healthMiddleware: RequestHandler = (_req, res, next) => {
  const status = { status: "UP" };
  res.status(200).json(status);
  next();
};

export default healthMiddleware;
