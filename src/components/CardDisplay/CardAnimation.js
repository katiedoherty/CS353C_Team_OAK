import React, { useState } from "react";
import styled from "styled-components";
import CardGroup from "./CardGroup";
import UnpackButton from "./Buttons/UnpackButton";
import LogOutButton from "./Buttons/LogOutButton";
import IngredientsButton from "./Buttons/IngredientsButton";
import "./CardAnimation.css";

import RandomCardGenerator from "../RandomCardGenerator/CardGenerator.js";

const Container = styled.div`
  display: grid;
  max-width: calc(100% - 45px);
  gap: 10px;
  margin: 0px auto 90px;

  @media (max-width: 768px) {
    max-width: calc(100% - 32px);
  }
`;

const CardAnimation = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      title: "TEST",
      subtitle: "TEST",
      power: "0",
    },
  ]);

  const addItem = () => {
    const timestamp = Date.now();
    setItems([
      ...items,
      {
        id: timestamp,
        title: "TEST",
        subtitle: "TEST",
        readTime: "TEST",
      },
    ]);
    const getCard = RandomCardGenerator();
    console.log(getCard);
  };

  const removeItem = (id) => {
    console.log("The id of this item:" + id);
    const newItems = [...items].filter((item) => {
      return item.id !== id;
    });

    setItems(newItems);
  };

  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="wrapper">
      <div class="title">
        <h1> Make your Meal! </h1>
      </div>
      <div className="cardDisplay">
        <Container>
          <CardGroup items={items} removeItem={removeItem}></CardGroup>
        </Container>
      </div>
      <div className="buttonContainer">
        <IngredientsButton label={"Ingredients"}></IngredientsButton>
        <UnpackButton label={"Unpack Cards"} addItem={addItem}></UnpackButton>
        <LogOutButton
          label={"Log Out"}
          handleLogout={handleLogout}
        ></LogOutButton>
      </div>
    </div>
  );
};

export default CardAnimation;
