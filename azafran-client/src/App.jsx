import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import LoginLayout from "./components/Templates/LoginLayout";
import RegisterLayout from "./components/Templates/RegisterLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginLayout />} />
        <Route path="/register" element={<RegisterLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
