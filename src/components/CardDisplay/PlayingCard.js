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
`;

const PlayingCard = (props) => {
  return (
    <StyledCard key={props.id} onClick={props.removeItem}>
      <div className="cardDisplay">
        <img
          id="cardImage"
          src={require("../Images/icons/Card5.jpg")}
          alt="card"
        />

        <input
          class="inputButton"
          type="text"
          id="randomCard"
          name="randomCard"
          readonly="readonly"
        />
      </div>
    </StyledCard>
  );
};

export default PlayingCard;
