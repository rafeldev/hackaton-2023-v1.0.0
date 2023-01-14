import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { rutas } from "./RouterConfigure";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          {rutas.map((ruta, index) => (
            <Route key={index} path={ruta.path} exact={ruta.exact}>
              <ruta.page />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
};
