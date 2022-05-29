import React from 'react';
import ShoppingCartItem from '@components/ShoppingCartItem';
import arrow from '@icons/flechita.svg';
import '@styles/MyOrder.scss';

function MyOrder() {
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My Order</p>
      </div>
      <div className="MyOrder-content">
        <ShoppingCartItem />
        <div className="order">
          <p>
            <span>Total </span>
          </p>
          <p>$560,00</p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </aside>
  );
}
export default MyOrder;