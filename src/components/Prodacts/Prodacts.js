import React from 'react';

import classes from './Prodacts.css';
import Prodact from '../Prodacts/Prodact/Prodact';

const prodacts = props => (
   <div className={classes.Prodacts}>
      <Prodact
         prodacts={props.prodacts}
         clicked={props.favoriteCliced}/>
   </div>
);

export default prodacts;
