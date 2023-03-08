/* eslint-disable no-unused-vars */
import React from "react";
import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";

export default function AddToCart({ product }) {
  const { addItem } = useShoppingCart();

  function handleAddItem() {
    addItem(product);
    toast.success(`${product.name} is added to your cart!`);
  }

  return "Add To Cart";
}
