import React, { useContext } from 'react';
import { ShopContext } from '../context';

const BasketItem = (props) => {
  const { mainId, displayName, price, quantity } = props;

  const { removeFromBasket, incQuantity, decQuantity } =
    useContext(ShopContext);

  return (
    <li className='collection-item'>
      {displayName}{' '}
      <i
        className='material-icons basket-change'
        onClick={() => {
          decQuantity(mainId);
        }}
      >
        remove
      </i>
      x {quantity}
      <i
        className='material-icons basket-change'
        onClick={() => {
          incQuantity(mainId);
        }}
      >
        add
      </i>{' '}
      = {price.finalPrice * quantity} руб.
      <span
        className='secondary-content'
        onClick={() => removeFromBasket(mainId)}
      >
        <i
          className='material-icons'
          style={{ cursor: 'pointer' }}
        >
          clear
        </i>
      </span>
    </li>
  );
};

export default BasketItem;
