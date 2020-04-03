import React from "react";
import classes from "./Product.css";

import Favorite from "../../UI/Favorite/Favorite";

const prodact = (props) => {
  const prodactsRender = props.products.map((data, idx) => {
    return (
      <div key={idx} className={classes.Grid}>
        <img src={data.image} alt="" />
        <Favorite clicked={props.clicked} favoriteProps={data.favorite} />
        <div className={classes.Descriprion}>
          <p>{data.title}</p>
          <span>${data.price}</span>
        </div>
      </div>
    );
  });
  return <div className={classes.Prodact}>{prodactsRender}</div>;
};

export default prodact;
