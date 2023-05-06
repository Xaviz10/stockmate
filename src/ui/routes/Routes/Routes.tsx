import React from "react";
import { Routes, Route } from "react-router-dom";
import { Products, Orders } from "../../pages";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => (
  <Routes>
    {/* Public */}
    <Route path="/orders" element={<Orders />} />
    <Route path="/products" element={<Products />} />
    <Route path="/" element={<Orders />} />

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
