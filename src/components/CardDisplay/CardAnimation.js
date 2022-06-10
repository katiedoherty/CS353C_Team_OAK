import React, { useState } from "react";
import styled from "styled-components";
import CardGroup from "./CardGroup";
import UnpackButton from "./Buttons/UnpackButton";
import LogOutButton from "./Buttons/LogOutButton";
import IngredientsButton from "./Buttons/IngredientsButton";
import "./CardAnimation.css";
import axios from "axios";
import RandomCardGenerator from "../randomCardGenerator/newCardGenerator";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Modalfunction from "./Buttons/UserCardsButton";

const Container = styled.div`
  display: grid;
  max-width: calc(100% - 45px);
  gap: 10px;
  margin: 0px auto 90px;

  @media (max-width: 768px) {
    max-width: calc(100% - 32px);
  }
`;

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

//const newCard = RandomCardGenerator();

const CardAnimation = () => {
  //console.log(props.data);
  const params = useParams();

  const useremail = params.id;
  const [chicken, setChicken] = useState(0);
  const [salmon, setSalmon] = useState(0);
  const [turkey, setTurkey] = useState(0);
  const [steak, setSteak] = useState(0);
  const [tripchef, settripchef] = useState(0);
  const [pushfood, setpushfood] = useState(0);
  const [complementsfood, setcomplementsfood] = useState(0);
  const [cookedtoperfection, setcookedtoperfection] = useState(0);
  const [sprouts, setSprouts] = useState(0);
  const [peas, setPeas] = useState(0);
  const [carrots, setCarrots] = useState(0);
  const [broccoli, setBroccoli] = useState(0);
  const [patatoes, setPotatoes] = useState(0);
  const [chips, setChips] = useState(0);
  const [pasta, setPasta] = useState(0);
  const [rice, setRice] = useState(0);
  const [saltandpepper, setSaltandpepper] = useState(0);
  const [ketchup, setKetchup] = useState(0);
  const [gravy, setGravy] = useState(0);
  const [saffron, setSaffron] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [items, setItems] = useState([]);
  
 
  window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
  };
  
  //adds card template to screen
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
    RandomCardGenerator();
    var elts = document.getElementsByClassName("usercards");
    for (var i = 0; i < elts.length; ++i) {
      console.log(elts[i].value);
    }
  };


//sends current states to the card field on the users document in the database and increments then by the number that is in the state
  const update = async () => {
    const res = await axios.put(`http://localhost:8080/api/usercards`, {
      email: useremail,
      Protein: {
        Chicken: chicken,
        Salmon: salmon,
        Turkey: turkey,
        Steak: steak,
      },
      WildCards: {
        Tripthechef: tripchef,
        pushyouropponentsfoodoffthetable: pushfood,
        Ramsaycomplementsyourfood: complementsfood,
        Cookedtoperfection: cookedtoperfection,
      },
      Vegetables: {
        Sprouts: sprouts,
        Peas: peas,
        Carrots: carrots,
        Broccoli: broccoli,
      },
      Carbs: {
        Patatoes: patatoes,
        Chips: chips,
        Pasta: pasta,
        Rice: rice,
      },
      Modifiers: {
        SaltAndPepper: saltandpepper,
        Ketchup: ketchup,
        Gravy: gravy,
        Saffron: saffron,
      },
    });

    console.log(res.data);
  };

  //after any of the mentioned states in the array are changed then run the update function and change all states to 0.
  useEffect(() => {
    update();
    setChicken(0);
    setSalmon(0);
    setTurkey(0);
    setSteak(0);
    settripchef(0);
    setpushfood(0);
    setcomplementsfood(0);
    setcookedtoperfection(0);
    setChips(0);
    setPasta(0);
    setPotatoes(0);
    setRice(0);
    setSaltandpepper(0);
    setKetchup(0);
    setGravy(0);
    setSaffron(0);
    setPeas(0);
    setCarrots(0);
    setSprouts(0);
    setBroccoli(0);
  }, [
    chicken,
    steak,
    salmon,
    turkey,
    tripchef,
    pushfood,
    complementsfood,
    cookedtoperfection,
    ketchup,
    saltandpepper,
    gravy,
    saffron,
    sprouts,
    carrots,
    broccoli,
    peas,
    chips,
    pasta,
    rice,
    patatoes
  ]);

  //removes card from screen
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
      <div className="title">
        <h1> Make your Meal! </h1>
      </div>
      <div className="cardDisplay">
        <Container>
          <CardGroup items={items} removeItem={removeItem}></CardGroup>
        </Container>
      </div>
      <div className="buttonContainer">
        <IngredientsButton
        items = {setItems}
          chicken={setChicken}
          steak={setSteak}
          salmon={setSalmon}
          turkey={setTurkey}
          tripchef={settripchef}
          pushfood={setpushfood}
          complementsfood={setcomplementsfood}
          cookedtoperfection={setcookedtoperfection}
          ketchup={setKetchup}
          saltandpepper={setSaltandpepper}
          gravy={setGravy}
          saffron={setSaffron}
          sprouts={setSprouts}
          carrots={setCarrots}
          broccoli={setBroccoli}
          peas={setPeas}
          chips={setChips}
          pasta={setPasta}
          rice={setRice}
          patatoes={setPotatoes}
          
          label={"Add To Deck"}
        ></IngredientsButton>
        <UnpackButton label={"Unpack Cards"} addItem={addItem}></UnpackButton>
        <StyledButton
          className="openModalBtn"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Your Cards
        </StyledButton>
        {openModal && <Modalfunction close={setOpenModal} />}
        <LogOutButton
          label={"Log Out"}
          handleLogout={handleLogout}
        ></LogOutButton>
      </div>
    </div>
  );
};

export default CardAnimation;
