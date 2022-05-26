//collects the information of the saved user cards from the database and displays them on a modal on the frontend.

import React from "react";
import styled from "styled-components";
import "../CardAnimation.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./usercards.css";
const modalstyles = {
  position: `fixed`,
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
  backgroundColor: `#FFF`,
  padding: `2%`,
  zIndex: 1000,
  margin: `30px`,
};

const overlaystyles = {
  position: `fixed`,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: `rgba(0,0,0,.7)`,
  zIndex: 1000,
};

function Modalfunction({ close }) {
  const params = useParams();

  const useremail = params.id;
  const [personscards, setPersonsCards] = useState("");
  const [cards, setCards] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/usercards/${useremail}`)
      .then((response) => {
        setPersonsCards(response.data);
      });
  }, []);

  return (
    <div style={overlaystyles} className="row">
      <div className="body" style={modalstyles}>
        <ahref className="X" onClick={() => close(false)}></ahref>
        <h1>Your Cards</h1>
        <div className="column">
          <table>
            <thead>
            <tr>
              <th>Protein Card Names</th>
              <th>Number Of Protein Cards</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chicken</td>
                <td>{personscards?.Protein?.Chicken}</td>
              </tr>
              <tr>
                <td>Salmon</td>
                <td>{personscards?.Protein?.Salmon}</td>
              </tr>
              <tr>
                <td>Turkey</td>
                <td>{personscards?.Protein?.Turkey}</td>
              </tr>
              <tr>
                <td>Steak</td>
                <td>{personscards?.Protein?.Steak}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="column">
          <table>
            <thead>
            <tr>
              <th>Carbohydrate Card Names</th>
              <th>Number Of Carbohydrate Cards</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>Potatoes</td>
                <td>{personscards?.Carbs?.Patatoes}</td>
              </tr>
              <tr>
                <td>Chips</td>
                <td>{personscards?.Carbs?.Chips}</td>
              </tr>
              <tr>
                <td>Pasta</td>
                <td>{personscards?.Carbs?.Pasta}</td>
              </tr>
              <tr>
                <td>Rice</td>
                <td>{personscards?.Carbs?.Rice}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="column">
          <table>
            <thead>
            <tr>
              <th>Vegetable Card Names</th>
              <th>Number of Vegetable Cards</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sprouts</td>
                <td>{personscards?.Vegetables?.Sprouts}</td>
              </tr>
              <tr>
                <td>Peas</td>
                <td>{personscards?.Vegetables?.Peas}</td>
              </tr>
              <tr>
                <td>Carrots</td>
                <td>{personscards?.Vegetables?.Carrots}</td>
              </tr>
              <tr>
                <td>Broccoli</td>
                <td>{personscards?.Vegetables?.Broccoli}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="column">
          <table>
            <thead>
            <tr>
              <th>Modifier Card Names</th>
              <th>Number of Modifier Cards</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Salt and Pepper</td>
                <td>{personscards?.Modifiers?.SaltAndPepper}</td>
              </tr>
              <tr>
                <td>Ketchup</td>
                <td>{personscards?.Modifiers?.Ketchup}</td>
              </tr>
              <tr>
                <td>Gravy</td>
                <td>{personscards?.Modifiers?.Gravy}</td>
              </tr>
              
              <tr>
                <td>Saffron</td>
                <td>{personscards?.Modifiers?.Saffron}</td>
              </tr>
              
            </tbody>
          </table>
        </div>

        <div>
          <table>
            <thead>
            <tr>
              <th>Wildcard names</th>
              <th>Number of Wildcards</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Trip The Chef!</td>
                <td>{personscards?.WildCards?.Ramsaycomplementsyourfood}</td>
              </tr>
              <tr>
                <td>Food on the Floor!</td>
                <td>
                  {personscards?.WildCards?.pushyouropponentsfoodoffthetable}
                </td>
              </tr>
              <tr>
                <td>Ramsay Complements!</td>
                <td>{personscards?.WildCards?.Ramsaycomplementsyourfood}</td>
              </tr>
              <tr>
                <td>Perfectly Cooked!</td>
                <td>{personscards?.WildCards?.Cookedtoperfection}</td>
              </tr>
             
             
              
            </tbody>
          </table>
        </div>
        <button className="closeButton" onClick={() => close(false)}>
          <b>CLOSE</b>
        </button>
      </div>
    </div>
  );
}
//return <StyledButton onClick = {modal}>{props.label}</StyledButton>;

export default Modalfunction;
