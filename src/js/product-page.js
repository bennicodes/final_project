// Imported Products from products.js -------
import {
  airpodsProducts,
  appleWatchProducts,
  ipadProducts,
  iphoneProducts,
  macProducts,
} from "./products.js";

// Import from cart.js -------
import { addToCart } from "./cart.js";

// Product categories
const productCategories = ["iphone", "mac", "ipad", "airpods", "watch"];
const productData = {
  iphone: iphoneProducts,
  mac: macProducts,
  ipad: ipadProducts,
  airpods: airpodsProducts,
  watch: appleWatchProducts,
};

const main = document.querySelector("main");

const popupContainer = document.querySelector(".popup__container");
const popupHeading = document.querySelector(".popup__heading");
const popupImage = document.querySelector(".popup__product-image");
const popupSpecs = document.querySelector(".popup__product-list");
const popupBuyButton = document.querySelector("#popup__buy-button");
const closePopupButton = document.querySelector(".popup__close-button");

// Function to open the popup
function openPopup(product) {
  if (!popupContainer || !popupSpecs) {
    console.error("Popup container or specs list not found.");
    return;
  }

  //   Popup buy button
  popupBuyButton.textContent = "Buy";

  // Update product details in the popup
  popupHeading.textContent = product.name;
  popupImage.src = product.image;
  popupImage.alt = product.alt;

  // Clear existing specs and add new ones
  popupSpecs.innerHTML = "";

  product.specs.forEach((spec) => {
    const specItem = document.createElement("li");
    specItem.textContent = spec;
    specItem.classList.add("popup__product-list-specs");

    // Append each spec as list item
    popupSpecs.append(specItem);
  });

  // Add product to cart from popup window
  popupBuyButton.onclick = () => {
    addToCart(product.id);
  };

  // Show the popup
  popupContainer.classList.add(
    "popup__container--active",
    "popup__container-overlay--active"
  );
}

// TODO: Add learn more button when hovering

// Close popup
function closePopupAction() {
  popupContainer.classList.remove(
    "popup__container--active",
    "popup__container-overlay--active"
  );
}

// Function to close the popup
function closePopup() {
  popupContainer.classList.remove(
    "popup__container--active",
    "popup__container-overlay--active"
  );
}

// Add event listener to the close button
if (closePopupButton) {
  closePopupButton.addEventListener("click", closePopup);
}

// Close the popup when user clicks outside of popup
popupContainer.addEventListener("click", (e) => {
  if (e.target === popupContainer) {
    closePopup();
  }
});

// Insert products to correct section
function insertProducts(category, products) {
  const section = document.querySelector(
    `.${category.toLowerCase()}__product-section`
  );

  section.innerHTML = "";

  // Create Product Cards
  products.forEach((product) => {
    // Section container -------------
    const sectionContainer = document.createElement("div");
    sectionContainer.classList.add("section__container");
    section.append(sectionContainer);

    // Product container
    const productContainer = document.createElement("div");
    productContainer.classList.add("product__section-container");
    sectionContainer.append(productContainer);

    // Product card
    const productCard = document.createElement("button");
    productCard.classList.add("product__card");
    productContainer.append(productCard);

    // Product name
    const productName = document.createElement("h3");
    productName.textContent = product.name;
    productName.classList.add("product__card-heading");
    productCard.append(productName);

    // Product image
    const productImageContainer = document.createElement("div");
    productImageContainer.classList.add("product__card-image-container");
    productCard.append(productImageContainer);

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.alt;
    productImage.classList.add("product__card-image");
    productImageContainer.append(productImage);

    // Bottom card container -------------
    const bottomCardContainer = document.createElement("div");
    bottomCardContainer.classList.add("bottom__card-container");
    productCard.append(bottomCardContainer);

    // Product price
    const productPrice = document.createElement("p");
    productPrice.textContent = `$${product.price}`;
    bottomCardContainer.append(productPrice);

    // Buy button
    const buyButton = document.createElement("button");
    buyButton.href = product.buyButton;
    buyButton.textContent = "Buy";
    buyButton.classList.add("product__buy-button");
    bottomCardContainer.append(buyButton);

    // Add product to the cart ------------
    buyButton.addEventListener("click", (e) => {
      // Prevent the popup function when clicking button
      e.stopPropagation();

      addToCart(product.id);
    });

    // Event listener to open the popup
    productCard.addEventListener("click", () => {
      openPopup(product);
    });
  });
}

// Insert products into right sections
insertProducts("iPhone", iphoneProducts);
insertProducts("Mac", macProducts);
insertProducts("iPad", ipadProducts);
insertProducts("Airpods", airpodsProducts);
insertProducts("Watch", appleWatchProducts);

// Filter ------------------------------
const filterButtons = document.querySelectorAll(".filter__button");
const productSections = document.querySelectorAll(
  ".filtered__content-container"
);

// TODO: make the unselected filters remove their content
filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Toggle the active class on the clicked button
    const buttonClicked = e.target;
    const sectionId = buttonClicked.id.toLowerCase();
    const activeSection = document.querySelector(
      `.${sectionId}__product-section`
    ).parentElement;

    // Toggle the active class on the button
    buttonClicked.classList.toggle("filter__button--active");

    // Only show or hide the section if the button is active
    if (buttonClicked.classList.contains("filter__button--active")) {
      // Show the section
      activeSection.classList.add("filter--active");
    } else if (!buttonClicked.classList.contains("filter--active")) {
      activeSection.classList.remove("filter--active");
      activeSection.classList.add("filter--disabled");
    }
    {
      // Hide the section
      activeSection.classList.add("filter--disabled");
    }
  });
});
