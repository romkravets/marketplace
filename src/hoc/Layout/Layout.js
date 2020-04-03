import React, { useState } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Auth from "../../containers/Auth/Auth";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

import classes from "./Layout.css";

import Footer from "../../components/Footer/Footer";
import Aux from "../Auxiliary/Auxiliary";

const layout = (props) => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
  //const [isFavorite, setFavorite] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseLoginHandler = () => {
    setPurchasing(!false);
  };

  return (
    <Aux>
      {/* <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        <Auth />
      </Modal> */}
      <Toolbar
        drawerToggleClicked={sideDrawerToggleHandler}
        loginCliced={purchaseLoginHandler}
      />
      <SideDrawer open={sideDrawerIsVisible} closed={sideDrawerClosedHandler} />

      <main className={classes.Content}>{props.children}</main>

      <Footer />
    </Aux>
  );
};

export default layout;
