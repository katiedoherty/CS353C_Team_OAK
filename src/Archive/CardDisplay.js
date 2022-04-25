import React, { useState } from "react";

// import "./CardDisplay.css";
import CardGroup from "../components/CardDisplay/CardGroup";
// import UnpackButton from "./UnpackButton";
// import LogOutButton from "./LogOutButton";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import Card from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Container = styled.div`
  display: grid;
  max-width: calc(100% - 64px);
  margin: 0px auto 90px;

  @media (max-width: 768px) {
    max-width: calc(100% - 32px);
  }
`;

const CardDisplay = () => {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div class="title">
      <h1> Make your Meal! </h1>
      <Button variant="contained">My Ingredients</Button>

      <div class="rowOne">
        {/* Grid One: Row One - Protein, Carbs, Veg*/}
        <Grid container justifyContent="center" item xs={12} spacing={1}>
          {/* Card One: Protein. */}

          <div class="cardHover"></div>

          {/* Card Two: Carbs. */}
          <div class="cardHover"></div>

          {/* Card Three: Carbs. */}
          <div class="cardHover"></div>
        </Grid>
      </div>

      <br />

      <div class="rowTwo">
        {/* Grid Two: Row Two - Seasoning & Wildcard */}
        <Grid container justifyContent="center" item xs={12} spacing={1}>
          <div class="cardHover"></div>
          <div class="cardHover"></div>
        </Grid>
      </div>
    </div>
  );
};

export default CardDisplay;
