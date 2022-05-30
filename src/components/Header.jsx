import React, { useState, useEffect } from 'react';
import Menu from '@components/Menu';
import logo from '@logos/logo_yard_sale.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';
import iconMenu from '@icons/icon_menu.svg';
import '@styles/Header.scss';

function Header() { 
  const [toggle, setToggle] = useState(false);
  const [addClass, setAddClass] = useState('Menu');

  const handleToggle = () => {
    setToggle(!toggle);
    setTimeout(() => {
      setAddClass('Menu toggle')
    }, 10);
    setAddClass('Menu')
  }

  return (
    <nav>
      <div className="menu">
        <figure>
          <img src={iconMenu} alt="menu" className="menu-img" />
        </figure>
      </div>
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            carlos@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img src={iconShoppingCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
      {toggle && <Menu cssClass={addClass} />}
    </nav>
  );
}
export default Header;