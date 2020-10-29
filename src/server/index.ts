import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import {
  ssrMiddleware,
  errorMiddleware,
  healthMiddleware,
} from "./middlewares";

const PORT = process.env.PORT || 8080;
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use("/static", express.static("./build/static"));
} else {
  app.use("/static", express.static(".tmp"));
}

app.use(morgan("tiny"));
app.use(helmet());
app.use(ssrMiddleware);
app.get("/health", healthMiddleware);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
