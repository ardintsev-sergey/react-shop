import React, { useContext } from 'react';
import { ShopContext } from '../context';
import Item from './Item';

const ItemsList = () => {
  const { items = [] } = useContext(ShopContext);
  if (!items.length) {
    return <h3>Здесь ничего нет</h3>;
  }
  return (
    <div className='items'>
      {items.map((item) => (
        <Item
          key={item.mainId}
          {...item}
        />
      ))}
    </div>
  );
};

export default ItemsList;
