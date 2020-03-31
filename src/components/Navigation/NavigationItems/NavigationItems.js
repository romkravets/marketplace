import React from 'react';

import classes from './NavigationItems.css';
import Button from '../../UI/Button/Button';
import heartIcon from  '../../../assets/images/heart-header.svg';

const navigationItems = ( props ) => (
    <div className={classes.NavigationItems}>
        {/* <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        {!props.isAuthenticated
            ? <NavigationItem link="/auth">Authenticate</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>} */}
         {/* <NavigationItem></NavigationItem> */}
         <Button btnType="Sell">SELL</Button>
            <a href="">LOGIN</a>
            <a href="">
                <img src={heartIcon} alt=""/>
            </a>
    </div>
);

export default navigationItems;