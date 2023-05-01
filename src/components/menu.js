import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {

    return (
        <div>
        <a href = "/" className = "logo">
            Traveling
          </a>
          <div className = "menu">
            <a> My Map  </a>
            <a> Recommendations</a>
            <a> View all Posts</a>
          </div>
          <div className = "signin">
            <a> sign in</a>
          </div>
        </div>
    )
}
export default Menu