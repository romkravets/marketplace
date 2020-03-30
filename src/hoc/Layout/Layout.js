import React, {useState, useEffect} from 'react';
import axios from '../../axios-orders';
import Prodact from '../../components/Prodact/Prodact';
import Aux from '../Auxiliary/Auxiliary';


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

   return (
      <Aux>
         Toolbar
         SideDrawer
            <Prodact  prodacts={prodactsState}/>
         Footer
      </Aux>
   );
}

export default layout;