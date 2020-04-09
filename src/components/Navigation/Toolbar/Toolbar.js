import React from "react";
import { Link } from "react-router-dom";

import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Search from "../../Search/Search";

const toolbar = (props) => (
  <div className={classes.Header}>
    <div className={classes.Toolbar}>
      <Link to="/" className={classes.Logo}>
        <Logo />
      </Link>
      <div className={classes.DesktopOnly}>
        <NavigationItems
          isAuthenticated={props.isAuth}
          isUserName={props.isUser}
        />
      </div>
      <DrawerToggle clicked={props.drawerToggleClicked} />
    </div>
    <Search />
  </div>
);

export default toolbar;
