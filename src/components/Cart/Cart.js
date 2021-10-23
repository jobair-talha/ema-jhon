import React from "react";

const Cart = (props) => {
  const prevPrice = props.cart;
  const totalPrice = prevPrice.reduce((total, price) => total + price.price, 0);

  let shepping = 0;
  if (totalPrice > 50) {
    shepping = 0;
  } else if (totalPrice > 35) {
    shepping = 4;
  } else if (totalPrice > 15) {
    shepping = 3;
  } else if (totalPrice > 0) {
    shepping = 2;
  }
  const tax = totalPrice / 10;

  const grandTotal = totalPrice + shepping + tax;
  return (
    <div>
      <h1>Order Summary</h1>
      <p>Items ordered : {props.cart.length}</p>
      <p>Product Price : {totalPrice.toFixed(2)}</p>
      <p>
        <small>Shipping & holding Cost : {shepping}</small>
      </p>
      <p>
        <small>Product Tax : {tax.toFixed(3)}</small>
      </p>
      <h5>Total Price : ${grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;
