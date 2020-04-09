import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const sellInit = () => {
  return {
    type: actionTypes.SELL_INIT,
  };
};

export const sellProductStart = () => {
  return {
    type: actionTypes.SELL_PRODUCT_START,
  };
};

export const sellProductSuccess = (id, productData) => {
  return {
    type: actionTypes.SELL_PRODUCT_SUCCESS,
    productId: id,
    productData: productData,
  };
};

export const sellProductFail = (error) => {
  return {
    type: actionTypes.SELL_PRODUCT_FAIL,
    error: error,
  };
};

export const sellProduct = (productData, token) => {
  return (dispatch) => {
    dispatch(sellProductStart());
    axios
      .post("/product.json?auth=" + token, productData)
      .then((response) => {
        dispatch(sellProductSuccess(response.data.name, productData));
      })
      .catch((error) => {
        dispatch(sellProductFail(error));
      });
  };
};
