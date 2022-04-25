import { Route, Routes, Navigate } from "react-router-dom";
import CardAnimation from "./components/CardDisplay/CardAnimation";
import Signup from "./components/SignUp/SignUp";
import Login from "./components/LoginPage/Login";
import "./App.css";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<CardAnimation />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
