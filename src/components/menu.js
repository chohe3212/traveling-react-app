import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {

  return (
    <div className='menu-page'>
      <div className="inner">
        <a href="/" className="logo">
          Traveling
        </a>
        <div className="menu">
          <a onClick={() => (window.location.href = "/map")}> My Map  </a>
          <a href='/'> Recommendations</a>
          <a href='/'> View all Posts</a>
        </div>
        <div className="signin">
          <btn
            className="login_btn"
            onClick={() => (window.location.href = "/login")}
          > Sign in </btn>
        </div>
      </div>
    </div>
  )
}
export default Menu
