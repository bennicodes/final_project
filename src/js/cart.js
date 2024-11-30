const cartButton = document.querySelector(".cart__button");
const cartContainer = document.querySelector(".cart__container");
const closeCartButton = document.querySelector(".cart__close-button");

// Imported product data
import {
  airpodsProducts,
  appleWatchProducts,
  ipadProducts,
  iphoneProducts,
  macProducts,
} from "./products.js";

// Open Cart ------------------
cartButton.addEventListener("click", () => {
  cartContainer.classList.toggle("cart__container--active");
});

// Close Cart ----------------
closeCartButton.addEventListener("click", () => {
  cartContainer.classList.remove("cart__container--active");
});

// TODO: Animation when item is added to cart, and add clear cart function

// TODO: Add cart storage function

// TODO: Add clear cart function

// Cart -------------
const cart = [];

// Cloned array of products --------------
const allProducts = [
  ...iphoneProducts,
  ...macProducts,
  ...ipadProducts,
  ...airpodsProducts,
  ...appleWatchProducts,
];

document.addEventListener("DOMContentLoaded", () => {
  updateCartUI();
});

// Function to add product to cart
function addToCart(productId) {
  // Find the product
  const product = allProducts.find((item) => item.id === productId);

  // Check if the product already exists
  if (product) {
    const existingProduct = cart.find((item) => item.id === productId);

    // Increase quantity
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1,
      });
    }
    saveCartToStorage();
    updateCartUI();
  }
}

// Update Cart UI
function updateCartUI() {
  const cartItemContainer = document.querySelector(".cart__item-container");
  const totalPriceElement = document.querySelector(".sum__price");

  cartItemContainer.innerHTML = "";
  let totalPrice = 0;

  if (cart.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "Your cart is empty.";
    emptyMessage.classList.add("cart__text");
    cartItemContainer.append(emptyMessage);

    totalPriceElement.textContent = "$0.00";
    return;
  }

  // Item Price calculation
  cart.forEach((item, index) => {
    totalPrice += item.price * item.quantity;

    // Create cart item element -------------
    const cartItem = document.createElement("li");
    cartItem.className = "cart__item";

    // Cart Item Image -----------
    const cartItemImageContainer = document.createElement("div");
    cartItemImageContainer.classList.add("cart__item-image-container");
    cartItem.append(cartItemImageContainer);

    const cartItemImage = document.createElement("img");
    cartItemImage.src = `${item.image}`;
    cartItemImage.alt = `${item.name}`;
    cartItemImage.classList.add("cart__item-image");
    cartItemImageContainer.append(cartItemImage);

    const itemName = document.createElement("p");
    itemName.textContent = `${item.name}`;
    itemName.classList.add("cart__item-name");
    cartItem.append(itemName);

    // Cart Item Quantity and Price -----------
    const itemPriceContainer = document.createElement("div");
    itemPriceContainer.classList.add("item__price-container");
    cartItem.append(itemPriceContainer);

    const itemQuantityContainer = document.createElement("div");
    itemQuantityContainer.classList.add("cart__item-quantity");
    itemPriceContainer.append(itemQuantityContainer);

    const subtractQuantityButton = document.createElement("button");
    subtractQuantityButton.textContent = "-";
    subtractQuantityButton.classList.add("item__minus");
    itemQuantityContainer.append(subtractQuantityButton);

    const itemQuantity = document.createElement("span");
    itemQuantity.textContent = `${item.quantity}`;
    itemQuantityContainer.append(itemQuantity);

    const addQuantityButton = document.createElement("button");
    addQuantityButton.textContent = "+";
    addQuantityButton.classList.add("item__plus");
    itemQuantityContainer.append(addQuantityButton);

    // Item Price ------------
    const itemPrice = document.createElement("p");
    itemPrice.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
    itemPriceContainer.append(itemPrice);

    cartItemContainer.append(cartItem);

    // EventListener for quantity buttons --------
    // Decrease quantity
    subtractQuantityButton.addEventListener("click", () => {
      updateQuantity(index, -1);
    });

    // Increase quantity
    addQuantityButton.addEventListener("click", () => {
      updateQuantity(index, 1);
    });

    updateCartCounter();
  });

  // Update total price ---------
  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;

  // Automatically scroll to added product
  cartItemContainer.scrollTop = cartItemContainer.scrollHeight;
}

// Update product quantity in the cart ---------
function updateQuantity(index, change) {
  const item = cart[index];
  if (item) {
    item.quantity += change;

    if (item.quantity <= 0) {
      cart.splice(index, 1);
    }

    saveCartToStorage();
    updateCartUI();
    updateCartCounter();
  }
}

// Update cart counter --------
function updateCartCounter() {
  const cartCounter = document.querySelector(".cart__counter");
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCounter.textContent = totalQuantity;
}

// Clear cart -----------
const clearCartButton = document.querySelector(".clear__cart-button");
function clearCart() {
  cart.length = 0;

  saveCartToStorage();
  updateCartUI();
  updateCartCounter();
}

clearCartButton.addEventListener("click", clearCart);

function saveCartToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getCartFromStorage() {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    const parsedCart = JSON.parse(storedCart);
    cart.length = 0;
    cart.push(...parsedCart);
    updateCartUI();
    updateCartCounter();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  getCartFromStorage();
});

// Checkout -----------
const checkoutButton = document.querySelector(".cart__checkout-button");

checkoutButton.addEventListener("click", () => {
  alert("Your order has been placed. Thank you for your purchase!");
  clearCart();
  cartContainer.classList.remove("cart__container--active");
});

export { addToCart };
