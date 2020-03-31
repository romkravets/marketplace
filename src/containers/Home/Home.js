import React, { useState, useEffect } from "react";
import axios from "../../axios-orders";
import Prodacts from "../../components/Prodacts/Prodacts";

const home = (props) => {
  console.log(props);
  const [prodactsState, setProdactsState] = useState([]);

  useEffect(() => {
    axios
      .get("https://marketplace-91001.firebaseio.com/products.json")
      .then((response) => {
        const prodacts = response.data;
        const updateProdacts = prodacts.map((prodact) => {
          return {
            ...prodact
          };
        });
        setProdactsState(updateProdacts);
        //console.log(updateProdacts);
      });
  }, []);

  const isFavoriteHandler = () => {
    // const disabledInfo = {
    //    ...prodactsState
    // };
    // console.log(disabledInfo);
    // for (let key in disabledInfo) {
    //    console.log(disabledInfo[key].favorite);
    // }
  };

  return (
    <Prodacts prodacts={prodactsState} favoriteCliced={isFavoriteHandler} />
  );
};

export default home;
