import express from "express";
import morgan from "morgan";
import ssrMiddleware from "./ssrMiddleware";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(morgan("tiny"));

if (process.env.NODE_ENV === "production") {
  app.use("/static", express.static("./build/static"));
} else {
  app.use("/static", express.static(".tmp"));
}

app.use(ssrMiddleware);

app.get("/api/:id", async (req, res) => {
  res.send({ v1: req.params });
});

app.use((req, res, next) => {
  res.status(404).send("404");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
