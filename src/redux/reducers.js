import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT, DECREMENT, SET_CART } from './actions';

const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    case INCREMENT:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case DECREMENT:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
