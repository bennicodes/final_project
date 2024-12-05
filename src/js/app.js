// Import Products
import {
  airpodsProducts,
  appleWatchProducts,
  ipadProducts,
  iphoneProducts,
  macProducts,
} from "./products.js";

import { addToCart } from "./cart.js";

document.addEventListener("DOMContentLoaded", () => {
  const buyButtons = document.querySelectorAll(".product__buy-button");

  // Buy buttons
  buyButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Get id from button
      const productId = button.id;

      // Add product to cart
      addToCart(productId);
    });
  });
});
