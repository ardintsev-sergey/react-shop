export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_ITEMS':
      return {
        ...state,
        items: payload || [],
        loading: false,
      };
    case 'ADD_TO_BASKET': {
      const itemIndex = state.orders.findIndex(
        (orderItem) => orderItem.mainId === payload.mainId
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.orders, newItem];
      } else {
        newOrder = state.orders.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        orders: newOrder,
        alertName: payload.displayName,
      };
    }
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        orders: state.orders.filter((el) => el.mainId !== payload.id),
      };
    case 'TOGGLE_BASKET':
      return {
        ...state,
        isBasketOpen: !state.isBasketOpen,
      };
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };
    case 'PLUS_QUANTITY':
      return {
        ...state,
        orders: state.orders.map((el) => {
          if (el.mainId === payload.id) {
            const newQuantity = el.quantity + 1;
            return {
              ...el,
              quantity: newQuantity,
            };
          } else {
            return el;
          }
        }),
      };
    case 'MINUS_QUANTITY':
      return {
        ...state,
        orders: state.orders.map((el) => {
          if (el.mainId === payload.id) {
            const newQuantity = el.quantity - 1;
            return {
              ...el,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return el;
          }
        }),
      };

    default:
      return state;
  }
};
