import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const SecureRoute = ({ children, ...rest }) => {
  const { uid, userName } = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");

  console.log(token, "log1");
  if (!token) return <Redirect to="/" />;
  console.log(token, "log2");

  return <Route {...rest}>{children}</Route>;
};

export default SecureRoute;
