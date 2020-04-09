import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utillity";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const sellInit = (state, action) => {
  return updateObject(state, { purchased: false });
};

const sellProductStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const sellProductSuccess = (state, action) => {
  const newOrder = updateObject(action.productData, { id: action.productId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder),
  });
};

const sellProductFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELL_INIT:
      return sellInit(state, action);
    case actionTypes.SELL_PRODUCT_START:
      return sellProductStart(state, action);
    case actionTypes.SELL_PRODUCT_SUCCESS:
      return sellProductSuccess(state, action);
    case actionTypes.SELL_PRODUCT_FAIL:
      return sellProductFail(state, action);
    //  case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart( state, action );
    //  case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess( state, action );
    //  case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail( state, action );
    default:
      return state;
  }
};

export default reducer;
