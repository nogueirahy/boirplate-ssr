import fs from "fs";
import path from "path";
import _template from "lodash/template";

let compiled = null;
let html = null;

export default ({ markup, preloadedState }) => {
  if (!compiled) {
    if (process.env.NODE_ENV === "production") {
      html = fs.readFileSync(path.resolve("build/static/index.html"));
    } else {
      html = fs.readFileSync(path.resolve(".tmp/index.html"));
    }
  }
  compiled = _template(html);
  return compiled({ markup, preloadedState });
};
