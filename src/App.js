import { Route, Routes, Navigate } from "react-router-dom";
import CardAnimation from "./components/CardDisplay/CardAnimation";
import Signup from "./components/SignUp/SignUp";
import Login from "./components/LoginPage/Login";
import "./App.css";

setInterval(function () {
  //function to check if the user has reached the unpack limit of six cards
  var cards = document.getElementsByClassName("cardImage");
  if (cards.length >= 6) {
    const unpackButton = (document.getElementById(
      "unpack_button"
    ).disabled = true);
    unpackButton = document
      .getElementById("unpack_button")
      .setAttribute("style", "background-color: #FF7F7F;");
  } else {
    let unpackButton = (document.getElementById(
      "unpack_button"
    ).disabled = false);
    //RESET THE COLOR OF THE UNPACK BUTTON
    unpackButton = document
      .getElementById("unpack_button")
      .setAttribute("style", "background-color: #2b9fe0;");
  }
}, 500);

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/:id" exact element={<CardAnimation />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/" exact element={<Login />} />
      <Route path="/:id" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
