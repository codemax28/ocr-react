import React from "react";
import { useState, useEffect } from "react";
// import logo from '../assets/logo.png'
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";

export default function Shop() {



  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <div>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
    </div>
  );
}
