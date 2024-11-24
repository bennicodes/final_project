const iphoneSection = document.querySelector(".iphone__product-section");
const macSection = document.querySelector(".mac__product-section");
const ipadSection = document.querySelector(".ipad__product-section");

const productDescriptionList = document.querySelectorAll(".product__list");

// iPhone Products
const iphoneProducts = [
  {
    name: "iPhone 16 Pro & Pro Max",
    price: 999,
    image: "../assets/img/iphone_16_pro_max-removebg-preview.png",
    alt: "iPhone 16 Pro",
    specs: [
      "The first iPhone designed for Apple Intelligence. Personal, private, powerful.",
      "Camera Control gives you an easier way to quickly access camera tools.",
      "A18 Pro chip powers Apple Intelligence and AAA gaming — and helps deliver a huge leap in battery life.",
      "4K 120 fps Dolby Vision and 4 studio-quality mics. A Pro studio in your pocket.",
    ],
    buyButton: "./order.html",
  },
  {
    name: "iPhone 16 & iPhone 16 Plus",
    price: 799,
    image: "../assets/img/iphone-16-reg-removebg-preview.png",
    alt: "iPhone 16",
    specs: [
      "The first iPhone designed for Apple Intelligence. Personal, private, powerful.",
      "Camera Control gives you an easier way to quickly access camera tools.",
      "A18 chip enables Apple Intelligence and console-level gaming with exceptional power efficiency.",
      "A big boost in battery life with up to 22 hours of video playback.",
    ],
    buyButton: "./order.html",
  },
];

// Mac Products
const macProducts = [
  {
    name: "MacBook Pro ",
    price: 1999,
    image: "../assets/img/macbook_pro_14-removebg-preview.png",
    alt: "MacBook Pro 14-inch",
    specs: [
      "M3 Pro chip delivers blazing-fast performance.",
      "Liquid Retina XDR display for stunning visuals.",
      "Up to 22 hours of battery life for all-day work.",
      "A full suite of ports for ultimate connectivity.",
    ],
    buyButton: "./order.html",
  },
  {
    name: "MacBook Air 13-inch",
    price: "From: $999",
    image: "../assets/img/Macbook-removebg-preview.png",
    alt: "MacBook Air 13-inch",
    specs: [
      "Apple M2 chip with 8-core CPU, 8-core GPU, and 16-core Neural Engine.",
      "13.6-inch Retina display with True Tone.",
      "Up to 18 hours of battery life for all-day performance.",
      "Slim and lightweight design for portability.",
      "Two Thunderbolt / USB 4 ports.",
    ],
    buyButton: "./order.html",
  },
  {
    name: "iMac",
    price: 1299,
    image: "../assets/img/imac_24-removebg-preview.png",
    alt: "iMac 24-inch",
    specs: [
      "Apple M3 chip powers all your favorite apps.",
      "4.5K Retina display delivers exceptional clarity.",
      "Available in 7 vibrant colors.",
      "Ultra-thin design with a seamless all-in-one setup.",
    ],
    buyButton: "./order.html",
  },
];

// iPad Products
const ipadProducts = [
  {
    name: "iPad Pro ",
    price: 1099,
    image: "../assets/img/ipad_pro_12_9-removebg-preview.png",
    alt: "iPad Pro 12.9-inch",
    specs: [
      "M3 chip with incredible power and efficiency.",
      "Liquid Retina XDR display with ProMotion.",
      "Supports Apple Pencil (2nd generation).",
      "5G connectivity for lightning-fast downloads.",
    ],
    buyButton: "./order.html",
  },
  {
    name: "iPad Air",
    price: 599,
    image: "../assets/img/ipad_air-removebg-preview.png",
    alt: "iPad Air",
    specs: [
      "A14 Bionic chip delivers powerful performance.",
      "10.9-inch Liquid Retina display with True Tone.",
      "Compatible with Magic Keyboard and Apple Pencil.",
      "All-day battery life for work and play.",
    ],
    buyButton: "./order.html",
  },
  {
    name: "iPad",
    price: 349,
    image: "../assets/img/ipad-removebg-preview.png",
    alt: "iPad",
    specs: [
      "The A14 Bionic chip lets you run multiple apps and work smoothly between them.",
      "All-screen design with 10.9-inch Liquid Retina display delivers an amazing viewing experience.",
      "Landscape 12MP Ultra Wide front camera with Center Stage for a great video calling experience.",
      "Stay connected with fast Wi‑Fi 6 and 5G wireless.",
    ],
    buyButton: "./order.html",
  },
];

// CLEAR EXISTING CONTENT
iphoneSection.innerHTML = "";
macSection.innerHTML = "";
ipadSection.innerHTML = "";

// Product Content
// Dynamically populate the iPhone section
iphoneProducts[0].products.forEach((product) => {
  // Create product container
  const productContainer = document.createElement("div");
  productContainer.classList.add("product__section-container");
  // Create product card
  const productCard = document.createElement("div");
  productCard.classList.add("product__card");
  productContainer.appendChild(productCard);

  const productCardLink = document.createElement("a");
  productCardLink.href = "#";
  productCardLink.classList.add("product__card-link");
  productCard.appendChild(productCardLink);

  // Product name
  const productName = document.createElement("h3");
  productName.textContent = product.name;
  productName.classList.add("product__card-heading");
  productCardLink.append(productName);

  // Product image
  const productImageContainer = document.createElement("div");
  productImageContainer.classList.add("product__card-image-container");
  productCardLink.append(productImageContainer);
  const productImage = document.createElement("img");
  productImage.src = product.image;
  productImage.alt = product.alt;
  productImage.classList.add("product__card-image");
  productImageContainer.append(productImage);

  // Bottom Card Container
  const bottomCardContainer = document.createElement("div");
  bottomCardContainer.classList.add("bottom__card-container");
  productCardLink.append(bottomCardContainer);

  // Product price
  const productPrice = document.createElement("p");
  productPrice.textContent = "$" + product.price;
  bottomCardContainer.append(productPrice);

  // Buy button
  const buyButton = document.createElement("a");
  buyButton.href = product.buyButton;
  buyButton.textContent = "Buy";
  buyButton.classList.add("product__buy-button");
  bottomCardContainer.append(buyButton);

  // Product specs
  const productSpecs = document.createElement("ul");
  product.specs.forEach((spec) => {
    const specItem = document.createElement("li");
    specItem.textContent = spec;
    productSpecs.append(specItem);
  });
  productContainer.append(productSpecs);

  // Append card to the section
  iphoneSection.append(productCard);
});
