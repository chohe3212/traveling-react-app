import { useState } from 'react';
import './App.css';
import Menu from "./components/Menu.js";
import Visual from "./components/Visual.js";

function App() {
  return (
    <div>
      <header>
        <div className = "inner">
          <Menu />
        </div>
      </header>
      <Visual />
    </div>
  );
}

export default App;
