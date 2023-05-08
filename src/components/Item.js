import React from "react";

function Item({ name, category }) {
  return (
    <li className="in-cart">
       
       {/*If the classname is filled ie<li className="in-cart">
                      then
          {/* the item is in the cart }
          </li>

          If the classname is empty ie <li className=""> 
                      then 
          {/* the item is NOT in the cart */}

      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
