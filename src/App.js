import React from 'react';
import classes from './App.css';
import Layout from './hoc/Layout/Layout';

const app = props => {

    return (
      <div className={classes.App}>
        <Layout/>
      </div>
    );
}

export default app;
