import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./containers/Home/Home";
import Sell from "./containers/Sell/Sell";
import Login from "./containers/Auth/Login/Login";
import Auth from "./containers/Auth/Auth";
//import Registration from "./containers/Auth/Registration/Registration";
import Logout from "./containers/Auth/Logout/Logout";
import Saved from "./containers/Saved/Saved";
import Layout from "./hoc/Layout/Layout";
import ProductItem from "./components/ProductItem/ProductItem";

import * as actions from "./store/actions/index";
// import * as firebase from "firebase";

// let firebaseConfig = {
//   apiKey: "AIzaSyADCx6rRTqPDTNi5H2rcFcBPzcb3u4QSBk",
//   authDomain: "marketplace-91001.firebaseapp.com",
//   databaseURL: "https://marketplace-91001.firebaseio.com",
//   projectId: "marketplace-91001",
//   storageBucket: "marketplace-91001.appspot.com",
//   messagingSenderId: "561618160981",
//   appId: "1:561618160981:web:36105beef96ec8614233dc",
//   measurementId: "G-4LJCGWNGKS",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// //firebase.analytics();

const app = (props) => {
  useEffect(() => {
    props.onTtyAutoSignup();
  }, []);

  return (
    <Layout>
      <Switch>
        <Route path="/product/:id" component={ProductItem} />
        <Route path="/product" component={ProductItem} />
        <Route path="/favorite" component={Saved} />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/logout" component={Logout} />
        <Route path="/auth/registration" component={Auth} />
        <Route path="/sell" component={Sell} />
        <Route path="/" exect component={Home} />
      </Switch>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTtyAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(app));
