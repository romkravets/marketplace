import React from "react";

import classes from "./Card.css";

import Favorite from "../UI/Favorite/Favorite";

const card = (props) => {
  return (
    <div className={classes.Card}>
      <img src={props.image} alt="" />
      <Favorite clicked={props.clicked} isFavorite={props.favorite} />
      <div className={classes.Descriprion}>
        <p>{props.title}</p>
        <span>${props.price}</span>
      </div>
    </div>
  );
};

export default card;
