import { BrowserRouter } from "react-router";
import { PublicRoutes } from "./components/PublicRoutes";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import "./App.css";

function App() {
  const userLoggedIn = localStorage.getItem("accessToken");
  return (
    <BrowserRouter>
      <PublicRoutes />
      <ProtectedRoutes />
    </BrowserRouter>
  );
}

export default App;
