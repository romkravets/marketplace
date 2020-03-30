import React, {useState, useEffect} from 'react';
import axios from '../../axios-orders';
import Prodact from '../../components/Prodact/Prodact';


const layout = props => {

   const [prodactsState, setProdactsState]= useState([]);

   useEffect(() => {
      axios.get('https://marketplace-91001.firebaseio.com/products.json')
      .then( response => {
        const prodacts = response.data;
        const updateProdacts = prodacts.map(prodact => {
          return {
              ...prodact
          }
      })
      setProdactsState(updateProdacts);
      })
    }, []);

   // const prodactsRender = prodactsState.map((data, idx) => {
   //       return (
   //       <div key={idx}>
   //          <img src={data.image}/>
   //          <p>{data.name}</p>
   //          <span>${data.price}</span>
   //         
   //       </div>
   //       )
   // });
   return (
      <div className="prodacts">
         {/* {prodactsRender} */}
         <Prodact  prodacts={prodactsState}/>
      </div>
   );
}

export default layout;