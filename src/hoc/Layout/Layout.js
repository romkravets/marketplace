import React, { useState } from "react";
import { connect } from "react-redux";

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
        isAuth={props.isAuthenticated}
        isUser={props.isUserName}
        drawerToggleClicked={sideDrawerToggleHandler}
        loginCliced={purchaseLoginHandler}
      />
      <SideDrawer
        isAuth={props.isAuthenticated}
        open={sideDrawerIsVisible}
        closed={sideDrawerClosedHandler}
      />

      <main className={classes.Content}>{props.children}</main>

      <Footer />
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    isUserName: state.auth.userName,
  };
};

export default connect(mapStateToProps)(layout);
