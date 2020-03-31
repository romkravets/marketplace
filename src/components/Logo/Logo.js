import React from 'react';

import logoBrand from '../../assets/images/logo.svg';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={logoBrand} alt="" />
    </div>
);

export default logo;