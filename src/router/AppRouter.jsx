import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TemplateLogin from "../pages/Login";
import { rutas } from "./RouterConfigure";
import SecureRoute from "./SecureRoute";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact={true}>
            <TemplateLogin />
          </Route>
          {rutas.map((ruta, index) => (
            <SecureRoute key={index} path={ruta.path} exact={ruta.exact}>
              <ruta.page />
            </SecureRoute>
          ))}
        </Switch>
      </div>
    </Router>
  );
};
