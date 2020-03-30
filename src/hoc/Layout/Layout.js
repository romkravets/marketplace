import React, {useState, useEffect} from 'react';
import axios from '../../axios-orders';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Prodact from '../../components/Prodact/Prodact';
import Footer from '../../components/Footer/Footer';
import Aux from '../Auxiliary/Auxiliary';


const layout = props => {

   const [prodactsState, setProdactsState]= useState([]);
   const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

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

    const sideDrawerClosedHandler = () => {
      setSideDrawerIsVisible(false);
    };

    const sideDrawerToggleHandler = () => {
      setSideDrawerIsVisible(!sideDrawerIsVisible);
      console.log('click');
    };

   return (
      <Aux>
         <Toolbar
            drawerToggleClicked={sideDrawerToggleHandler}/>
         <SideDrawer
            open={sideDrawerIsVisible}
            closed={sideDrawerClosedHandler}/>
         <Prodact  prodacts={prodactsState}/>
         <Footer/>
      </Aux>
   );
}

export default layout;