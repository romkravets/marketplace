import React from "react";
import { Link } from "react-router-dom";

import classes from "./NavigationItems.css";
import Button from "../../UI/Button/Button";
import heartIcon from "../../../assets/images/heart-header.svg";

const navigationItems = (props) => (
  <div className={classes.NavigationItems}>
    {/* <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        {!props.isAuthenticated
            ? <NavigationItem link="/auth">Authenticate</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>} */}
    {/* <NavigationItem></NavigationItem> */}

    <Link to="/sell">
      <Button onClick={props.clicked} btnType="Sell">
        SELL
      </Button>
    </Link>
    <Link to="/auth/login">LOGIN</Link>
    <Link to="/favorite">
      <img src={heartIcon} alt="" />
    </Link>
  </div>
);

export default navigationItems;
