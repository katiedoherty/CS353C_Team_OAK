import React from "react";
import styled from "styled-components";

import Card from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const StyledCard = styled.div`
  margin: 0px;
  
  .card-wrapper {
    position: relative;
  }
  .cardDisplay {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 280px;
    width: 200px;
    padding: 8px;
    );
  }
  
  .gener_deple{
    display: none;
    transition: .2s;
    transform: translateY(1em);
  }

  .inputButton_usercards:hover +  .gener_deple{
    display: block;
    transform: translateY(0);
  }

`;

const PlayingCard = (props) => {
  return (
    <StyledCard key={props.id} onClick={props.removeItem}>
      <div className="cardDisplay">
        <img
        className="cardImage"
          id="cardImage"
          src={require("../Images/icons/Card5.jpg")}
          alt="card"
        />

        <input
          className="inputButton_usercards"
          type="text"
          id="randomCard"
          name="randomCard"
          readOnly="readOnly"
        />
        
        <div className="gener_deple">
        <input
          className="input_generation"
          type="text"
          id="Cardgeneration"
          name="Cardgeneration"
          readOnly="readOnly"
        />

        <input
          className="input_depletion"
          type="text"
          id="CardDepletion"
          name="CardDepletion"
          readOnly="readOnly"
        />
      </div>
      </div>
    </StyledCard>
  );
};

export default PlayingCard;
