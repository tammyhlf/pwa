import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Install from './Install1'
import largeIcon from '../icon-large.png'

function Home() {
  const SHOP_LIST_LEN = 2000;
  const SHOP_LIST_ITEM = {
    name: 'This is a title',
    imgsrc: largeIcon
  };
  
  const generateShopList = () => {
    let items = [];
    for (let i = 0; i < SHOP_LIST_LEN; i++) {
      items.push(
        <li key={i}>
          <img className="shop-icon" src={SHOP_LIST_ITEM.imgsrc} alt="icon" />
          <h3>
            {SHOP_LIST_ITEM.name}
            <p>No.{SHOP_LIST_LEN - i}</p>
          </h3>
        </li>
      );
    }
    return items;
  };

  return (
    <div className="App">
      <h1>FUNCTION LIST</h1>
      <Install />
      <ul className="shop-list">
        {generateShopList()}
      </ul>
    </div>
  )
}

export default Home
