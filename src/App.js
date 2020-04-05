import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./containers/Home/Home";
import Sell from "./containers/Sell/Sell";
import Auth from "./containers/Auth/Auth";
import Registration from "./containers/Auth/Registration/Registration";
import Logout from "./containers/Auth/Logout/Logout";
import Saved from "./containers/Saved/Saved";
import Layout from "./hoc/Layout/Layout";

import * as actions from "./store/actions/index";

const app = (props) => {
  useEffect(() => {
    props.onTtyAutoSignup();
  }, []);

  return (
    <Layout>
      <Switch>
        <Route path="/favorite" component={Saved} />
        <Route path="/auth/login" component={Auth} />
        <Route path="/auth/logout" component={Logout} />
        <Route path="/auth/registration" component={Registration} />
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
