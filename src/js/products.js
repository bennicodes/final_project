// Products
const iphoneProducts = [
  {
    name: "iPhone 16 Pro & Pro Max",
    price: 999.0,
    image: "../assets/img/iphone_16_pro_max-removebg-preview.png",
    alt: "iPhone 16 Pro",
    specs: [
      "The first iPhone designed for Apple Intelligence. Personal, private, powerful.",
      "Camera Control gives you an easier way to quickly access camera tools.",
      "A18 Pro chip powers Apple Intelligence and AAA gaming — and helps deliver a huge leap in battery life.",
      "4K 120 fps Dolby Vision and 4 studio-quality mics. A Pro studio in your pocket.",
    ],
    buyButton: "Buy",
  },
  {
    name: "iPhone 16 & iPhone 16 Plus",
    price: 799.0,
    image: "../assets/img/iphone-16-reg-removebg-preview.png",
    alt: "iPhone 16",
    specs: [
      "The first iPhone designed for Apple Intelligence. Personal, private, powerful.",
      "Camera Control gives you an easier way to quickly access camera tools.",
      "A18 chip enables Apple Intelligence and console-level gaming with exceptional power efficiency.",
      "A big boost in battery life with up to 22 hours of video playback.",
    ],
    buyButton: "Buy",
  },
  {
    name: "iPhone SE",
    price: 429.0,
    image: "../assets/img/iphone-SE-removebg-preview.png",
    alt: "iPhone SE",
    specs: [
      "4.7-inch Retina HD display footnote ¹ that’s bright, colorful, and sharp.",
      "A15 Bionic, the same superpowerful chip that’s in iPhone 13.",
      "5G for fast downloads and high-quality streaming.",
      "Smarter camera makes automatic adjustments so faces, places, everything looks fabulous",
    ],
    buyButton: "Buy",
  },
];

const macProducts = [
  {
    name: "MacBook Pro ",
    price: 1599.0,
    image: "../assets/img/macbook-pro-removebg-preview.png",
    alt: "MacBook Pro 14-inch",
    specs: [
      "Supercharged by M4, M4 Pro, or M4 Max, MacBook Pro empowers you to take on the most demanding projects",
      "Go all day and night with up to 24 hours of battery life",
      "Apple Intelligence. Personal, private, powerful.",
      "The 14.2-inch Liquid Retina XDR display features 1,600 nits peak brightness and up to 1,000 nits sustained brightness, 1,000,000:1 contrast. With nano‑texture option.",
    ],
    buyButton: "Buy",
  },
  {
    name: "MacBook Air 13-inch",
    price: 999.0,
    image: "../assets/img/Macbook-removebg-preview.png",
    alt: "MacBook Air 13-inch",
    specs: [
      "Apple M2 chip with 8-core CPU, 8-core GPU, and 16-core Neural Engine.",
      "13.6-inch Retina display with True Tone.",
      "Up to 18 hours of battery life for all-day performance.",
      "Slim and lightweight design for portability.",
      "Two Thunderbolt / USB 4 ports.",
    ],
    buyButton: "Buy",
  },
  {
    name: "iMac",
    price: 1299.0,
    image: "../assets/img/imac-removebg-preview.png",
    alt: "iMac 24-inch",
    specs: [
      "An all-in-one desktop, iMac is strikingly thin, comes in seven vibrant colors, and complements any room",
      "The powerful M4 chip with an up to 10-core CPU and up to 10-core GPU keeps things running smoothly",
      "Apple Intelligence. Personal, private, powerful.",
      "The 24-inch 4.5K Retina display features 500 nits of brightness and supports up to 1 billion colors, with a nano-texture option for reduced glare in very bright settings",
    ],
    buyButton: "Buy",
  },
];

const ipadProducts = [
  {
    name: "iPad Pro ",
    price: 1099.0,
    image: "../assets/img/ipad-pro-removebg-preview.png",
    alt: "iPad Pro 12.9-inch",
    specs: [
      "M3 chip with incredible power and efficiency.",
      "Liquid Retina XDR display with ProMotion.",
      "Supports Apple Pencil (2nd generation).",
      "5G connectivity for lightning-fast downloads.",
    ],
    buyButton: "Buy",
  },
  {
    name: "iPad Air",
    price: 599.0,
    image: "../assets/img/ipad-air-removebg-preview.png",
    alt: "iPad Air",
    specs: [
      "A14 Bionic chip delivers powerful performance.",
      "10.9-inch Liquid Retina display with True Tone.",
      "Compatible with Magic Keyboard and Apple Pencil.",
      "All-day battery life for work and play.",
    ],
    buyButton: "Buy",
  },
  {
    name: "iPad",
    price: 349.0,
    image: "../assets/img/ipad-removebg-preview.png",
    alt: "iPad",
    specs: [
      "The A14 Bionic chip lets you run multiple apps and work smoothly between them.",
      "All-screen design with 10.9-inch Liquid Retina display delivers an amazing viewing experience.",
      "Landscape 12MP Ultra Wide front camera with Center Stage for a great video calling experience.",
      "Stay connected with fast Wi‑Fi 6 and 5G wireless.",
    ],
    buyButton: "Buy",
  },
];

const airpodsProducts = [
  {
    name: "AirPods 4 ",
    price: 129.0,
    image: "../assets/img/airpods-4-removebg-preview.png",
    alt: "airpods 4",
    specs: [
      "Personalized Spatial Audio with dynamic head tracking.",
      "Voice Isolation, Hey Siri, and Siri Interactions",
      "Supports Apple Pencil (2nd generation).",
      "Up to 5 hours of listening time on a single charge.",
      "Up to 30 hours total of listening time, using the case",
    ],
    buyButton: "Buy",
  },
  {
    name: "AirPods Pro 2 ",
    price: 249.0,
    image: "../assets/img/airpods-pro-2-removebg-preview.png",
    alt: "airpods pro 2",
    specs: [
      "Up to 2x more Active Noise Cancellation, with Adaptive Audio and Transparency mode",
      "Personalized Spatial Audio with dynamic head tracking",
      "Voice Isolation, Hey Siri, and Siri Interactions",
      "Up to 6 hours of listening time on a single charge with Active Noise Cancellation enabled",
      "Up to 30 hours total of listening time with Active Noise Cancellation enabled, using the case",
    ],
    buyButton: "Buy",
  },
  {
    name: "AirPods  Max ",
    price: 549,
    image: "../assets/img/airpods-max-removebg-preview.png",
    alt: "airpods max",
    specs: [
      "Up to 2x more Active Noise Cancellation, with Transparency mode",
      "Personalized Spatial Audio with dynamic head tracking",
      "Voice Isolation, Hey Siri, and Siri Interactions",
      "Up to 20 hours of listening time on a single charge with Active Noise Cancellation enabled Footnote ⁸",
    ],
    buyButton: "Buy",
  },
];
const appleWatchProducts = [
  {
    name: "Apple Watch Series 10",
    price: 399.0,
    image: "../assets/img/apple-watch-series-10-removebg-preview.png",
    alt: "apple watch series 10",
    specs: [
      "The thinnest Apple Watch ever, with our biggest display. With a new Wide-Angle Always-On OLED Retina display.",
      "Get health insights day and night. Now with sleep apnea notifications  footnote  ",
      "Track all your workouts and activity. New sensors for water sports.",
      "Faster charging gives you up to 80 percent battery in 30 minutes",
      "Get help in an emergency or if you fall or are in a car crash.",
    ],
    buyButton: "Buy",
  },
  {
    name: "Apple Watch Ultra 2",
    price: 799.0,
    image: "../assets/img/apple-watch-ultra-2-removebg-preview.png",
    alt: "Apple Watch Ultra 2",
    specs: [
      "The ultimate sports and adventure watch has a rugged 49mm titanium case with 100-meter water resistance and IP6X dust resistance. Now in black.",
      "The most accurate GPS in a sports watch.",
      "Customizable Action button controls a variety of functions. Quickly switch between starting a workout, marking a Compass Waypoint, beginning a dive, and more.",
      "Up to 36 hours of battery life, up to 72 hours on low power settings, and up to 17 hours of workout use in Low Power Mode.",
      "Up to 30 hours total of listening time with Active Noise Cancellation enabled, using the case.",
    ],
    buyButton: "Buy",
  },
  {
    name: "Apple Watch SE",
    price: 249,
    image: "../assets/img/apple-watch-se-removebg-preview.png",
    alt: "Apple Watch SE",
    specs: [
      "Set up Apple Watch For Your Kids,  even if they don’t have their own iPhone.",
      "Stay active with a range of workout types and motivating metrics.",
      "With a cellular plan you can call and text, even without your iPhone.",
      "Get help in an emergency or if you fall or are in a car crash",
    ],
    buyButton: "Buy",
  },
];

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

    // Append each spec as a list item
    popupSpecs.appendChild(specItem);
  });

  // Show the popup
  popupContainer.classList.add(
    "popup__container--active",
    "popup__container-overlay--active"
  );
}

// TODO: Add scroll feature when content doesn't fit

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

// Close the popup wehn user clicks outside of popup
popupContainer.addEventListener("click", (e) => {
  if (e.target === popupContainer) {
    closePopup();
  }
});

// Sort products to the right category -------
productCategories.forEach((category) => {
  const section = document.querySelector(`.${category}__product-section`);
  //   Clear existing content
  section.innerHTML = "";

  // Get the product list for the current category
  const products = productData[category];

  // Loop through the products and create cards
  products.forEach((product) => {
    // Product container
    const productContainer = document.createElement("div");
    productContainer.classList.add("product__section-container");
    section.appendChild(productContainer);

    // Product card
    const productCard = document.createElement("button");
    productCard.classList.add("product__card");
    productContainer.appendChild(productCard);

    // Product name
    const productName = document.createElement("h3");
    productName.textContent = product.name;
    productName.classList.add("product__card-heading");
    productCard.appendChild(productName);

    // Product image
    const productImageContainer = document.createElement("div");
    productImageContainer.classList.add("product__card-image-container");
    productCard.appendChild(productImageContainer);

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.alt;
    productImage.classList.add("product__card-image");
    productImageContainer.appendChild(productImage);

    // Bottom card container -------------
    const bottomCardContainer = document.createElement("div");
    bottomCardContainer.classList.add("bottom__card-container");
    productCard.appendChild(bottomCardContainer);

    // Product price
    const productPrice = document.createElement("p");
    productPrice.textContent = `$${product.price}`;
    bottomCardContainer.appendChild(productPrice);

    // Buy button
    const buyButton = document.createElement("button");
    buyButton.href = product.buyButton;
    buyButton.textContent = "Buy";
    buyButton.classList.add("product__buy-button");
    bottomCardContainer.appendChild(buyButton);

    // Event listener to open the popup
    productCard.addEventListener("click", () => {
      openPopup(product);
    });
  });
});
