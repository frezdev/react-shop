import React from 'react';
import iconClose from '@icons/icon_close.png';
import '@styles/ShoppingCartItem.scss';

function ShoppingCartItem() {
  return (
    <div className="OrderItem">
      <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg" alt="bike" />
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
      <img src={iconClose} alt="close" />
    </div>
  );
}
export default ShoppingCartItem;