import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className = "inner">
          <a href = "/" className = "logo">
            Traveling
          </a>
          <div className = "menu">
            <a> My Map  </a>
            <a> Recommendations</a>
            <a> View all</a>
          </div>
          <div className = "signin">
            <a> sign in</a>
          </div>
        </div>
      </header>

      <section className ="visual">
        <div className ="inner">
          <div className = "text1">
            반갑습니다.
          </div>
          <div className = "text2">
            당신의 여행을 돕는 Traveling입니다.
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
