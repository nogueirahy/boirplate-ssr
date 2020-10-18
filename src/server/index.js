import React from "react";
import ReactDOM from "react-dom/server";
import express from "express";
import AppComponent from "../client/App";

const app = express();

app.use(express.static('dist/client'));

app.get("/", function (req, res) {
  const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>SSAX</title>
        </head>
        <body>
          <div id="app">
            ${ReactDOM.renderToString(<AppComponent />)}
          </div>
          <script src="./index.js"></script>
        </body>
        </html>
      `;
  res.send(html);
});

const port = process.env.PORT || 1234;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
