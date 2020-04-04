import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Sell from "./containers/Sell/Sell";
import Auth from "./containers/Auth/Auth";
import Registration from "./containers/Auth/Registration/Registration";
import Saved from "./containers/Saved/Saved";
import Layout from "./hoc/Layout/Layout";

const app = (props) => {
  return (
    <Layout>
      <Switch>
        <Route path="/favorite" component={Saved} />
        <Route path="/auth/login" component={Auth} />
        <Route path="/auth/registration" component={Registration} />
        <Route path="/sell" component={Sell} />
        <Route path="/" exect component={Home} />
      </Switch>
    </Layout>
  );
};

export default app;
