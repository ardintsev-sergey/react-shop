import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context';
import { API_KEY, API_URL } from './../config';
import Alert from './Alert';
import BasketList from './BasketList';
import Cart from './Cart';
import ItemsList from './ItemsList';
import Preloader from './Preloader';

const Shop = () => {
  const { items, orders, loading, isBasketOpen, alertName, setItems } =
    useContext(ShopContext);

  useEffect(function getItems() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.shop);
        setItems(data.shop);
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={orders.length} />
      {loading ? <Preloader /> : <ItemsList items={items} />}
      {isBasketOpen && <BasketList />}

      {alertName && <Alert />}
    </main>
  );
};

export default Shop;
