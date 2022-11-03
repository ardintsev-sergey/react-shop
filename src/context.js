import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  items: [],
  orders: [],
  loading: true,
  isBasketOpen: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item });
  };

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } });
  };

  value.handleBasketOpen = () => {
    dispatch({ type: 'TOGGLE_BASKET' });
  };

  value.incQuantity = (itemId) => {
    dispatch({ type: 'PLUS_QUANTITY', payload: { id: itemId } });
  };

  value.decQuantity = (itemId) => {
    dispatch({ type: 'MINUS_QUANTITY', payload: { id: itemId } });
  };

  value.setItems = (data) => {
    dispatch({ type: 'SET_ITEMS', payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
