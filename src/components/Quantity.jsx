import React, { useState, useEffect } from 'react';

export default function Quantity() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    console.log("Quantity changed:", quantity);
  }, [quantity]);  

  return (
    <div className="quantity-box">
      <button className="quantity-button" name="minus" type="button" onClick={decrease}>-</button>
      <input type="number" name="quantity" className="quantity-input" min="1" value={quantity} readOnly/>
      <button className="quantity-button" name="plus" type="button" onClick={increase}>+</button>
    </div>
  );
}
