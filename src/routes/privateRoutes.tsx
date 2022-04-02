import React from "react";
import { Navigate, Route } from "react-router-dom";

export default function PrivateRoute({
  children,
  isAuthenticated,
  ...rest
}: any): React.ReactElement {
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? children : <Navigate to="/" />)}
    />
  );
}
