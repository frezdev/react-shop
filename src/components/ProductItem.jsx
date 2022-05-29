import React, { useState } from 'react';
import addToCart from '@icons/bt_add_to_cart.svg';
import '@styles/ProductItem.scss';

function ProductItem() {
  const [cart, setCart] = useState([]);

  const handleClick = () => {
    setCart([]);
  }

  return (
    <div className="ProductItem">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg" alt className="product-img" />
      <div className="product-info">
        <div>
          <p>$120.00</p>
          <p>Bike</p>
        </div>
        <figure onClick={handleClick} >
          <img src={addToCart} alt />
        </figure>
      </div>
    </div>
  );
}
export default ProductItem;