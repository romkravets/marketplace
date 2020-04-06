import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.css";

const footer = (props) => (
  <footer className={classes.Footer}>
    <div>Copyright © 2020</div>
    <div>
      <Link to="/">Privacy Policy</Link>
    </div>
  </footer>
);

export default footer;
