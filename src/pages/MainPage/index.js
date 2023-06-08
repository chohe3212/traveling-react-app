import React from 'react'
import Menu from "../../components/menu";
import Visual from "../../components/Visual";
import "./MainPage.css";

function MainPage() {
  return (
    <div>
      <header className ="header__menu">
        <Menu />
      </header>
      <Visual />
    </div>
  )
}

export default MainPage
