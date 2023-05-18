import React from 'react'
import Menu from "../../components/Menu";
import Visual from "../../components/Visual";
import "./MainPage.css";
import Mapmain from '../../components/Mapmain';

function MainPage() {
  return (
    <div>
      <header className ="header__menu">
        <Menu />
      </header>
      <Visual />
      <Mapmain />
    </div>
  )
}

export default MainPage
