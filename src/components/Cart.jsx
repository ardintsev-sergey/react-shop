import React from 'react';

const Cart = (props) => {
  const { quantity = 0, handleBasketOpen = Function.prototype } = props;
  return (
    <div
      className='cart deep-purple darken-2 white-text'
      onClick={handleBasketOpen}
    >
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  );
};

export default Cart;
