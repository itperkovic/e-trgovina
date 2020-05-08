import { ADD_ITEMS, ADD_ITEM,} from '../actions';

const initialState = {
    items: [],
};

function addItems(state, action) {
    return {
      ...state,
      items: [...state.items, ...action.payload],
    };
  }
  
  function addItem(state, action) {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  }
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_ITEMS:
        return addItems(state, action);
  
      case ADD_ITEM:
        return addItem(state, action);

        default:
            return state;
    }
}