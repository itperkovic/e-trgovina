import { createAction } from '../../utils/action-helpers';

export const ADD_ITEMS = "ADD_ITEMS";
export const addItems = createAction(ADD_ITEMS);



export const ADD_CARTITEMS = "ADD_CARTITEMS";
export const addToCart = createAction(ADD_CARTITEMS);