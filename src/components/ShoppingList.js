import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState('')

  function filterItem(event) {
    const selectedValue = event.target.value;
    setCategory(selectedValue);
  }
  const filteredItems = selectedCategory !== 'All' ? items.filter(item => item.category === selectedCategory) : items;

  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterItem}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
