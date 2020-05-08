import { combineReducers } from 'redux';
import items from './items';

let reducers = {
  items
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
