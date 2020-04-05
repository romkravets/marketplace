import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const fetchProductsStart = () => {
  return {
    type: actionTypes.FETCH_PODUCTS_START,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    products: products,
  };
};

export const fetchProductsFailed = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAILED,
    error: error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsStart());
    axios
      .get("https://marketplace-91001.firebaseio.com/product.json")
      .then((response) => {
        const fetchedProducts = [];
        for (let key in response.data) {
          fetchedProducts.push({
            ...response.data[key],
            id: key,
          });
        }
        dispatch(fetchProductsSuccess(fetchedProducts));
      })
      .catch((error) => {
        dispatch(fetchProductsFailed(error));
      });
  };
};
