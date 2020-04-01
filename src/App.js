import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Sell from "./containers/Sell/Sell";
import Login from "./containers/Auth/Login/Login";
import Registration from "./containers/Auth/Registration/Registration";
import Saved from "./containers/Saved/Saved";
import classes from "./App.css";
import Layout from "./hoc/Layout/Layout";

const app = (props) => {
  return (
    // <div className={classes.App}>
    <Layout>
      <Switch>
        <Route path="/favorite" component={Saved} />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/registration" component={Registration} />
        <Route path="/sell" component={Sell} />
        <Route path="/" exect component={Home} />
      </Switch>
    </Layout>
    // </div>
  );
};

export default app;
