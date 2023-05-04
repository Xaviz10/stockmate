import React, { ReactNode } from "react";
// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AnyAction } from "redux";

interface PrivateRouteProps {
  children: JSX.Element;
}

export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  // const token = useSelector(getSessionToken);
  // if (!token) {
  //   return <Navigate to="/" />;
  // }
  return children;
}
