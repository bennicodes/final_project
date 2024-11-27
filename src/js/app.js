// Import Product Data ------------
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

  // Attach click event listener to each "Buy" button
  buyButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Get the product ID from the button's ID attribute
      const productId = button.id;

      // Add product to cart
      addToCart(productId);
    });
  });
});
