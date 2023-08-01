import { useState } from "react";
import React from "react";

function Item({ name, category }) {
  const [items, setItems] = useState(0)
  const [cart, setCart]  = useState(false)
  const [selectedCategory, setCategory] = ''

function addToCart(){
 setItems(items + 1) 

}
function toggle(){
  setCart(!cart)
}



  return (
    <li className={cart ? "in-cart" : ''}>
       <span>{name}</span>
       <span className="category">{category}</span> 
      <button className={cart? 'remove' : 'add'} onClick={toggle}>{ cart ? 'Remove' : 'Add'} </button>
    </li>
  );
}

export default Item;
