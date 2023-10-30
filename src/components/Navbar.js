import React from 'react'
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux/es/hooks/useSelector';

const Navbar = () => {
  const items= useSelector((state)=>state.cart)
  return (
    <nav>
      <span className='logo'>Redux Toolkit</span>
      <div className='navlinks'>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/cart" className="link">
          Cart
        </Link>
        <span className="cart-counter">Cart Items: {items.length}</span>
      </div>
    </nav>
  );
}

export default Navbar