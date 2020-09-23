import { ADD_CARTITEMS} from '../actions';

const initialState = {
    cartItems: [],
};

function addItems(state, action) {
    if (state.cartItems.some((item) => item.id === action.payload)) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            ((item) => item.id !== action.payload)
          ),
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.concat(
            state.items.find((item) => item.id === action.payload)
          ),
        };
      }
  }

  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_CARTITEMS:
        return addItems(state, action);

        default:
            return state;
    }
}