import React, { useState } from 'react';

function Item({ name, category }) {
  
  const [isInCart, setIsInCart] = useState(false);

  const handleButtonClick = () => {
    setIsInCart(prevIsInCart => !prevIsInCart);
  };


  return (
    <li className={isInCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <button onClick={handleButtonClick}>
        {isInCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
