import { Route, Routes, Navigate } from "react-router-dom";
import CardAnimation from "./components/CardDisplay/CardAnimation";
import Signup from "./components/SignUp/SignUp";
import Login from "./components/LoginPage/Login";
import "./App.css";

setInterval(function(){
  //function to check if the user has reached the unpack limit of six cards
  if(document.getElementById("unpack_button").disabled){
    return;
  }
  var cards = document.getElementsByClassName("cardImage");
  if(cards.length >= 6){
    const unpackButton = document.getElementById("unpack_button").disabled = true;
  }
  else{
    const unpackButton = document.getElementById("unpack_button").disabled = false;
  }
}, 200);

function App() {
  const user = localStorage.getItem("token");
  
  return (
    <Routes>
      {user && <Route path="/:id" exact element={<CardAnimation />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/:id" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
