import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda&display=swap");

  border-radius: 12px;
  background-color: #2b9fe0;
  font-family: "Bodoni Moda", serif;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px;
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

const UnpackButton = (props) => {
  return (
    <StyledButton id="unpack_button" onClick={props.addItem}>
      {props.label}
    </StyledButton>
  );
};

export default UnpackButton;
