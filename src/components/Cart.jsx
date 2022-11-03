import React, { useContext } from 'react';
import { ShopContext } from '../context';

const Cart = () => {
  const { orders, handleBasketOpen = Function.prototype } =
    useContext(ShopContext);

  const quantity = orders.length;
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
