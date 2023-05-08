import React from "react";

function Item({ name, category }) {
  return (
    <li className= "in-cart">
      
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
