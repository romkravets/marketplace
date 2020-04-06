import React from "react";

import classes from "./Favorite.css";
import favoriteIcon from "../../../assets/images/favorite.svg";
import favoriveClickedIcon from "../../../assets/images/favorite-click.svg";

const favorite = (props) => {
  const stopPropagations = (e) => {
    e.stopPropagation();
    console.log("prop");
  };
  console.log(props.isFavorite);
  return (
    <div
      className={classes.Favorite}
      onClick={((e) => props.clicked, stopPropagations)}
    >
      <img src={props.isFavorite ? favoriveClickedIcon : favoriteIcon} alt="" />
    </div>
  );
};

export default favorite;
