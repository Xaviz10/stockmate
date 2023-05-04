import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => (
  <Routes>
    {/* Public */}
    <Route path="/" element={<Home />} />

    <Route path="*" element={<></>} />
  </Routes>
);

// {/* Private */}
// {/* <Route
//   path="/profile"
//   element={
//     <PrivateRoute>
//       <Profile />
//     </PrivateRoute>
//   } */}
