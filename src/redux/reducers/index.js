import { combineReducers } from 'redux';
import items from './items';
import cart from './cart';

let reducers = {
  items, cart
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
