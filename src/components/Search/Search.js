import React from "react";

import classes from "./Search.css";

import Button from "../UI/Button/Button";

const search = (props) => (
  <div className={classes.Search}>
    <input
      className={classes.SearchInput}
      type="text"
      placeholder="Search products by name"
    />
    <input className={classes.Location} type="text" placeholder="Location" />
    <Button btnType="Search">Search</Button>
  </div>
);

export default search;
