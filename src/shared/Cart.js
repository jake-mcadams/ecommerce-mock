import React from "react";
import cart from "../images/icon-cart.svg";
import '../styles/shared/Cart.css'

const Cart = () => {
  return (
    <div className="cart__container">
      <img src={cart} alt="Shopping Cart" className="cart__image" />
    </div>
  );
};

export default Cart;
