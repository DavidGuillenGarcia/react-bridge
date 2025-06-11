import { useEffect } from "react";
import { Dashboard } from "../pages/Dashboard/Dashboard.page";
import { Routes, Route, useNavigate } from "react-router";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export { ProtectedRoutes };
