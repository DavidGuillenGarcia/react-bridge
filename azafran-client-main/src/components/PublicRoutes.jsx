import { Login } from "../pages/Login/Login.page";
import { Register } from "../pages/Register/Register.page";
import { Routes, Route, Navigate } from "react-router";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export { PublicRoutes };
