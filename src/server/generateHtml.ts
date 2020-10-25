import fs from "fs";
import path from "path";
import _template from "lodash/template";
import { TemplateExecutor } from "lodash";

let compiled: null | TemplateExecutor = null;
let html: string | null = null;

export default ({
  markup,
  preloadedState,
}: {
  markup: string;
  preloadedState: object;
}) => {
  if (!compiled) {
    if (process.env.NODE_ENV === "production") {
      html = fs.readFileSync(path.resolve("build/static/index.html"), "utf8");
    } else {
      html = fs.readFileSync(path.resolve("x.tmp/index.html"), "utf8");
    }
  }
  if (html) {
    compiled = _template(html);
    return compiled({ markup, preloadedState });
  }
};
