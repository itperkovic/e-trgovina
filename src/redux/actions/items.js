import { createAction } from '../../utils/action-helpers';

export const ADD_ITEMS = "ADD_ITEMS";
export const addItems = createAction(ADD_ITEMS);

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = createAction(ADD_ITEM);