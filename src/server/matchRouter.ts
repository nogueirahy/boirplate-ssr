import { matchPath } from "react-router";
import routes from "../client/routes";

export default (path: string) => {
  let component = null;
  let params = null;
  routes.some((route) => {
    const match = matchPath(path, route);
    if (match) {
      params = match.params;
      component = route.component;
      return true;
    }
  });
  return {
    component,
    params,
  };
};
