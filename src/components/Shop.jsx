import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from './../config';
import Alert from './Alert';
import BasketList from './BasketList';
import Cart from './Cart';
import ItemsList from './ItemsList';
import Preloader from './Preloader';

const Shop = () => {
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isBasketOpen, setBasketOpen] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToBasket = (item) => {
    const itemIndex = orders.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrders([...orders, newItem]);
    } else {
      const newOrder = orders.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrders(newOrder);
    }
    setAlertName(item.displayName);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = orders.filter((el) => el.mainId !== itemId);
    setOrders(newOrder);
  };

  const incQuantity = (itemId) => {
    const newOrder = orders.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrders(newOrder);
  };

  const decQuantity = (itemId) => {
    const newOrder = orders.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrders(newOrder);
  };

  const handleBasketOpen = () => {
    setBasketOpen(!isBasketOpen);
  };

  const closeAlert = () => {
    setAlertName('');
  };

  useEffect(function getItems() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.shop);
        data.shop && setItems(data.shop);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <main className='container content'>
      <Cart
        quantity={orders.length}
        handleBasketOpen={handleBasketOpen}
      />
      {loading ? (
        <Preloader />
      ) : (
        <ItemsList
          items={items}
          addToBasket={addToBasket}
        />
      )}
      {isBasketOpen && (
        <BasketList
          orders={orders}
          handleBasketOpen={handleBasketOpen}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}

      {alertName && (
        <Alert
          name={alertName}
          closeAlert={closeAlert}
        />
      )}
    </main>
  );
};

export default Shop;