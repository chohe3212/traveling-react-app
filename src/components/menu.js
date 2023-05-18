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
          <a> My Map  </a>
          <a> Recommendations</a>
          <a> View all Posts</a>
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
