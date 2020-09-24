import { ADD_ITEMS, ADD_CARTITEMS} from '../actions';

const initialState = {
    items: [],
    cartItems: [],
};

function addItems(state, action) {
    return {
      ...state,
      items: [...state.items, ...action.payload],
    };
  }
  


  function addToCart(state, action) {
    console.log(action.payload);
    console.log(state.cartItems);
    if (state.cartItems.some(item => item.id === action.payload)) {
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
    } else {
      return {
        ...state,
        cartItems: state.cartItems.concat(state.items.find(item => item.id === action.payload)),
      };
    }
  }
  

  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_ITEMS:
        return addItems(state, action);
  

      case ADD_CARTITEMS:
        return addToCart(state, action);

        default:
            return state;
    }
}