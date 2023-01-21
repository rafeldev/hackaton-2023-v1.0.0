import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const SecureRoute = ({ children, ...rest }) => {
  const { uid, userName } = useSelector((state) => state.auth);

  if (!uid && !userName) return <Redirect to="/" />;

  return <Route {...rest}>{children}</Route>;
};

export default SecureRoute;
