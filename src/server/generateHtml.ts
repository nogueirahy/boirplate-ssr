import fs from "fs";
import path from "path";
import _template from "lodash/template";

const getAbsolutePath = () => {
  if (process.env.NODE_ENV === "production") {
    return path.resolve("build/static/index.html");
  } else {
    return path.resolve(".tmp/index.html");
  }
};

export default async ({ markup, preloadedState }) => {
  const indexFile: string = getAbsolutePath();

  return new Promise((resolve, reject) => {
    fs.readFile(indexFile, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }

      const compiled = _template(data);
      resolve(compiled({ markup, preloadedState }));
    });
  });
};
