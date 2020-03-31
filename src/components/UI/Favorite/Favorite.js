import React from 'react';

import classes from './Favorite.css';
import favoriteIcon from '../../../assets/images/favorite.svg';

const favorite = props => (
   <div className={classes.Favorite}>
      <img src={favoriteIcon} alt=""/>
   </div>
);

export default favorite;

