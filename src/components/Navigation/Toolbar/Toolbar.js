import React from "react";
import { Link } from "react-router-dom";

import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Link to="/" className={classes.Logo}>
      <Logo />
    </Link>
    <div className={classes.DesktopOnly}>
      <NavigationItems clicked={props.loginCliced} />
    </div>
    <DrawerToggle clicked={props.drawerToggleClicked} />
  </header>
);

export default toolbar;
