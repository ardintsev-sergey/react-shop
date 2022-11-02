import React from 'react';

const Item = (props) => {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    series,
    addToBasket = Function.prototype,
  } = props;

  return (
    <div
      className='card'
      id={mainId}
    >
      <div className='card-image'>
        <img
          src={displayAssets[0]?.background}
          alt={displayName}
        />
      </div>
      <div className='card-content'>
        <span className='card-title'>{displayName}</span>
        <p style={{ marginBottom: '10px' }}>{displayDescription}</p>

        <p className='series'>{series?.name}</p>
      </div>
      <div className='card-action'>
        <button
          className='btn'
          onClick={() =>
            addToBasket({
              displayName,
              mainId,
              price,
            })
          }
        >
          Купить
        </button>
        <span
          className='right'
          style={{ fontSize: '1.6rem' }}
        >
          {price.finalPrice} руб.
        </span>
      </div>
    </div>
  );
};

export default Item;
