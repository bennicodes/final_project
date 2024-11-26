const overlay = document.querySelector(".cart-overlay");
const cartButton = document.querySelector(".cart__button");
const cartContainer = document.querySelector(".cart__container");
const closeCartButton = document.querySelector(".cart__close-button");

// Open Cart ------------------
cartButton.addEventListener("click", () => {
  // cartContainer.classList.remove("cart__container--active");
  cartContainer.classList.toggle("cart__container--active");
});

// Close Cart ------------------
function closeCart() {
  cartContainer.classList.remove("cart__container--active");
}

// Close button event listener -------------
closeCartButton.addEventListener("click", closeCart);
