import React from 'react';
import BasketItem from './BasketItem';

const BasketList = (props) => {
  const {
    orders = [],
    handleBasketOpen = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  const totalPrice = orders.reduce((sum, el) => {
    return sum + el.price.finalPrice * el.quantity;
  }, 0);
  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>
        Корзина
        <i
          className='material-icons right'
          onClick={handleBasketOpen}
          style={{ cursor: 'pointer' }}
        >
          clear
        </i>
      </li>
      {orders.length ? (
        orders.map((item) => (
          <BasketItem
            key={item.mainId}
            {...item}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
          />
        ))
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item active sum'>
        Общая стоимость: {totalPrice} руб.
        <button className='secondary-content deep-purple darken-2 btn-small'>
          Оформить
        </button>
      </li>
    </ul>
  );
};

export default BasketList;
