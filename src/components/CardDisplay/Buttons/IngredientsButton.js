import React from "react";
import styled from "styled-components";
//button saving the cards on screen to the database and making the cards on the screen dissapear.

const StyledButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda&display=swap");

  border-radius: 12px;
  background-color: #2b9fe0;
  font-family: "Bodoni Moda", serif;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1px;
  color: white;
  padding: 1em;
  line-height: 0.5rem;
  height: 4rem;
  width: 220px;
  margin: 2rem 0 2rem;
  text-align: center;
  border: 2px solid #111;

  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-font-variant-ligatures: contextual;
  font-variant-ligatures: contextual;
  -webkit-font-feature-settings: "calt" 1;
  font-feature-settings: "calt" 1;
  transition: all 0.1s ease-out;
  text-align: center;

  &:hover {
    color: #000;
    background-color: #fff;
    -webkit-transform: scale(1.025);
    transform: scale(1.025);
    transition: all 0.1s ease-out;
  }
`;
  
const IngredientsButton = (props) => {
  const userCards = async () => {
    var updatecards = [];
    var elts = document.getElementsByClassName("usercards");
    for (var i = 0; i < elts.length; ++i) {
      updatecards.push(elts[i].value);

      if (updatecards[i] == "Chicken") {
        props.chicken((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Salmon") {
        props.salmon((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Turkey") {
        props.turkey((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Steak") {
        props.steak((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Trip the chef") {
        props.tripchef((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Food on the Floor!") {
        props.pushfood((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Ramsay Complements!") {
        props.complementsfood((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Cooked to Perfection!") {
        props.cookedtoperfection((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Sprouts") {
        props.sprouts((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Peas") {
        props.peas((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Carrots") {
        props.carrots((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Broccoli") {
        props.broccoli((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Potatoes") {
        props.patatoes((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Chips") {
        props.chips((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Pasta") {
        props.pasta((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Rice") {
        props.rice((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Salt & Pepper") {
        props.saltandpepper((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Ketchup") {
        props.ketchup((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Gravy") {
        props.gravy((prevValue) => prevValue + 1);
      } else if (updatecards[i] == "Saffron") {
        props.saffron((prevValue) => prevValue + 1);
      }
    }

   
      props.items([]);
    

    updatecards = [];
  };

  return <StyledButton onClick={userCards}>{props.label}</StyledButton>;
};

export default IngredientsButton;
