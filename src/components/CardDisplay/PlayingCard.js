import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda&display=swap");
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
  }

  .gener_deple {
    display: none;
    transition: 0.2s;
    transform: translateY(1em);
  }
  .cardImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cardDisplay:hover {
    background-color: yellow;
  }

  .cardDisplay:hover .gener_deple {
    display: block;
    transition: 0.2s;
    transform: translateY(-10em);
  }
  .inputButton_usercards {
    width: 100%;
    height: 10%;
    text-align: center;
    border: 2px solid #111;
    background-color: white;
    font-family: "Bodoni Moda", serif;
    font-size: 16px;
    font-weight: bold;
    padding: 1px;
    color: black;
    padding: 1em;
    line-height: 0.5rem;
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
        <div className="gener_deple">
          <input
            className="inputButton_usercards"
            type="text"
            id="randomCard"
            name="randomCard"
            readOnly="readOnly"
          />
          <input
            className="inputButton_usercards"
            type="text"
            id="CardGeneration"
            name="CardGeneration"
            readOnly="readOnly"
          />

          <input
            className="inputButton_usercards"
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
