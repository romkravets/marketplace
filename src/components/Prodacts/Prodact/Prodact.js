import React from 'react';
import classes from './Prodact.css';

import Favorite from '../../UI/Favorite/Favorite';

const prodact = props => {
   const prodactsRender = props.prodacts.map((data, idx) => {
      return (
      <div key={idx} className={classes.Grid}>
         <img src={data.image} alt=""/>
         <Favorite
            clicked={props.clicked}
            favoriteProps={data.favorite} />
            <div className={classes.Descriprion}>
               <p>{data.name}</p>
               <span>${data.price}</span>
            </div>
      </div>
      )
});
  return (
   <div className={classes.Prodact}>
      {prodactsRender}
   </div>
  )
}

export default prodact;