import React from "react";

import classes from "./Card.css";

import Favorite from "../UI/Favorite/Favorite";

const card = (props) => (
  //   <article className="Post" onClick={props.clicked}>
  //     <h1>{props.title}</h1>
  //     <div className="Info">
  //       <div className="Author">{props.author}</div>
  //     </div>
  //   </article>
  <div className={classes.Card}>
    <img src={props.image} alt="" />
    <Favorite clicked={props.clicked} isFavorite={props.favorite} />
    <div className={classes.Descriprion}>
      <p>{props.title}</p>
      <span>${props.price}</span>
    </div>
  </div>
);

export default card;
