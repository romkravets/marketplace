
import React from 'react';
// import { NavLink } from 'react-router-dom';
import Button from '../../../UI/Button/Button';
import heartIcon from  '../../../../assets/images/heart-header.svg';

import classes from './NavigationItem.css';

const navigationItem = ( props ) => (
    <div className={classes.NavigationItem}>
        {/* <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{props.children}</NavLink> */}
            <Button btnType="Sell">SELL</Button>
            <a href="">LOGIN</a>
            <a href="">
                <img src={heartIcon} alt=""/>
            </a>
    </div>
);

export default navigationItem;