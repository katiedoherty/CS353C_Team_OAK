import React from "react";
import styled from "styled-components";
import PlayingCard from "./PlayingCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const StyledGrid = styled.div`

  //Set 3 cards per column
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  grid-gap: 8px;
  max-width: calc(100% - 45px);
  margin: 0px auto 90px;
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }

  .transition-enter {
    opacity: 0.01;
    transform: translate(0, -10px);
  }

  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 300ms ease-in;
  }

  .transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }

  .transition-exit-active {
    opacity: 0.01;
    transform: translate(0, 10px);
    transition: all 300ms ease-in;
  }
`;

const CardGroup = (props) => {
  return (
    <TransitionGroup component={StyledGrid}>
      {props.items.map((item) => (
        <CSSTransition key={item.id} timeout={300} classNames="transition">
          <PlayingCard
            {...item}
            removeItem={() => {
              props.removeItem(item.id);
            }}
          ></PlayingCard>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default CardGroup;
