import React from 'react';
import burgerMenu from '../../../../assets/images/burger-menu.svg';

import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
       <img src={burgerMenu} alt=""/>
    </div>
);

export default drawerToggle;