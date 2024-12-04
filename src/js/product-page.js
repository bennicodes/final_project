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
const popupHeadingContainer = document.querySelector(
  ".popup__heading-container"
);
const popupHeading = document.querySelector(".popup__heading");
const popupPrice = document.querySelector(".popup__price");
const popupImage = document.querySelector(".popup__product-image");
const popupSpecs = document.querySelector(".popup__product-list");
const popupBuyButton = document.querySelector("#popup__buy-button");
const closePopupButton = document.querySelector(".popup__close-button");

// Function to open the popup
function openPopup(product) {
  //   Popup buy button
  popupBuyButton.textContent = "Buy";

  // Update product details in the popup
  popupHeading.textContent = product.name;
  popupPrice.textContent = `$${product.price.toFixed(2)}`;
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

  // section.innerHTML = "";

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

    const learnMoreButton = document.createElement("button");
    learnMoreButton.textContent = "Learn More";
    learnMoreButton.classList.add("learn__more-button");
    productCard.append(learnMoreButton);
    learnMoreButton.addEventListener("click", () => {
      openPopup(product);
    });

    function displayLearnMoreButton() {
      learnMoreButton.classList.add("learn__more-button--active");
    }
    function removeLearnMoreButton() {
      learnMoreButton.classList.remove("learn__more-button--active");
    }
    productCard.addEventListener("mouseenter", displayLearnMoreButton);
    productCard.addEventListener("mouseleave", removeLearnMoreButton);

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
    productPrice.textContent = `$${product.price.toFixed(2)}`;
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

filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonClicked = e.target;
    const sectionId = buttonClicked.id.toLowerCase();
    const activeSection = document.querySelector(
      `.${sectionId}__product-section`
    ).parentElement;

    // Toggle the active class on the button
    buttonClicked.classList.toggle("filter__button--active");

    // Get all sections
    const productSections = document.querySelectorAll(
      ".filtered__content-container"
    );

    // Update section visibility based on active buttons
    const activeButtons = [...filterButtons].filter((btn) =>
      btn.classList.contains("filter__button--active")
    );

    if (activeButtons.length > 0) {
      // Hide all sections initially
      productSections.forEach((section) => {
        section.classList.remove("filter--active");
        section.classList.add("filter--disabled");
      });

      // Show sections related to active buttons
      activeButtons.forEach((activeButton) => {
        const relatedSectionId = activeButton.id.toLowerCase();
        const relatedSection = document.querySelector(
          `.${relatedSectionId}__product-section`
        ).parentElement;

        if (relatedSection) {
          relatedSection.classList.add("filter--active");
          relatedSection.classList.remove("filter--disabled");
        }
      });
    } else {
      // If no buttons are active, reset all sections
      productSections.forEach((section) => {
        section.classList.remove("filter--disabled");
        section.classList.remove("filter--active");
      });
    }
  });
});

// Scroll to top ---------------
const scrollToTopButton = document.querySelector(".to-the-top__button");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.classList.add("to-the-top__button--visible");
  } else {
    scrollToTopButton.classList.remove("to-the-top__button--visible");
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
