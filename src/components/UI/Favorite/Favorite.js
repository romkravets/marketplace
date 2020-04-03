import React from "react";

import classes from "./Favorite.css";
import favoriteIcon from "../../../assets/images/favorite.svg";
import favoriveClickedIcon from "../../../assets/images/favorite-click.svg";

const favorite = (props) => {
  return (
    <div className={classes.Favorite} onClick={props.clicked}>
      <img
        src={props.favoriteProps ? favoriveClickedIcon : favoriteIcon}
        alt=""
      />
    </div>
  );
};

export default favorite;
