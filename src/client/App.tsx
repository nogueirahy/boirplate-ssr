import * as React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";

const App: React.FC = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default App;
