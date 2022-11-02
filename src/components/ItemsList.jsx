import React from 'react';
import Item from './Item';

const ItemsList = (props) => {
  const { items = [], addToBasket = Function.prototype } = props;
  if (!items.length) {
    return <h3>Здесь ничего нет</h3>;
  }
  return (
    <div className='items'>
      {items.map((item) => (
        <Item
          key={item.mainId}
          addToBasket={addToBasket}
          {...item}
        />
      ))}
    </div>
  );
};

export default ItemsList;
