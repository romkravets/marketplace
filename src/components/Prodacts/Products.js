import React from "react";

import classes from "./Products.css";
import Prodact from "./Product/Product";

const prodacts = (props) => (
  <div className={classes.Prodacts}>
    <Prodact products={props.products} clicked={props.favoriteCliced} />
  </div>
);

export default prodacts;
