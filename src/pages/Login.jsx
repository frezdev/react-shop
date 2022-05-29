import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import '@styles/Login.scss';

function Login() {
  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form">
          <label htmlFor="email" className="label">Email address</label>
          <input type="email" id="email" className="input input-email" placeholder="example@gmail.com" />
          <label htmlFor="password" className="label">Password</label>
          <input type="password" id="password" className="input input-password" placeholder="**********" />
          <input className="primary-button login-button" type="submit" defaultValue="Log in" />
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
}
export default Login;