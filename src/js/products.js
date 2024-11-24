const productContainer = document.querySelectorAll(
  ".product__section-container"
);
const iphoneSection = document.querySelector(".iphone__product-section");
const macSection = document.querySelector(".mac__product-section");
const ipadSection = document.querySelector(".ipad__product-section");

const productDescriptionList = document.querySelectorAll(".product__list");

const iphoneProducts = [
  {
    products: [
      {
        name: "iPhone 16 Pro & Pro Max",
        price: "From: $999",
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
        price: "From: $799",
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
    ],
  },
];
const macProducts = [
  {
    products: [
      {
        name: "MacBook Pro",
        price: "From: $1599",
        image: "../assets/img/macbook-pro-removebg-preview.png",
        alt: "MacBook Pro",
        description:
          "Designed for professionals with advanced performance and all-day battery life.",
        specs: [
          "M3, M3 Pro, or M3 Max chips for demanding tasks.",
          "Up to 22 hours of battery life.",
          "Liquid Retina XDR display with Extreme Dynamic Range and incredible contrast.",
          "1080p FaceTime HD camera, studio-quality mics, and Spatial Audio speakers.",
          "Three Thunderbolt 4 ports, HDMI, MagSafe 3, SDXC card slot, and headphone jack.",
        ],
        buyButton: "./order.html",
      },
      {
        name: "MacBook Air",
        price: "From: $999",
        image: "../assets/img/Macbook-removebg-preview.png",
        alt: "MacBook Air",
        description:
          "Lightweight and portable design with amazing all-day battery life.",
        specs: [
          "Powerful 8-core CPU and up to 10-core GPU with the Apple M2 chip.",
          "Up to 18 hours of battery life.",
          "13.6-inch Liquid Retina display supporting 1 billion colors.",
          "1080p FaceTime HD camera and studio-quality mics.",
        ],
        buyButton: "./order.html",
      },
      {
        name: "iMac",
        price: "From: $1299",
        image: "../assets/img/imac-removebg-preview.png",
        alt: "iMac",
        description:
          "From $1299. Designed for a brilliant display and incredible performance.",
        specs: [
          "Portable design — Lightweight and under half an inch thin, so you can take MacBook Air anywhere you go.",
          "Get more done faster — The powerful 8-core CPU and up to 10-core GPU of the Apple M2 chip keep things running smoothly.",
          "Up to 18 hours of battery life — Amazing, all-day battery life so you can leave the power adapter at home.",
          "A brilliant display — The 13.6-inch Liquid Retina display supports 1 billion colors.",
          "Look sharp, sound great — Everything looks and sounds amazing with a 1080p FaceTime HD camera and three mics.",
        ],
        buyButton: "./order.html",
      },
    ],
  },
];
const ipadProducts = [
  {
    products: [
      {
        name: "iPad Pro",
        price: "From: $999",
        image: "../assets/img/ipad-pro-removebg-preview.png",
        alt: "iPad Pro",
        description:
          "Powerful and portable, designed for creativity and productivity.",
        specs: [
          "8-core CPU and up to 10-core GPU powered by the Apple M2 chip.",
          "Lightweight design and amazing all-day battery life.",
          "Brilliant Liquid Retina display supporting 1 billion colors.",
        ],
        buyButton: "./order.html",
      },
      {
        name: "iPad Air",
        price: "From: $599",
        image: "../assets/img/ipad-air-removebg-preview.png",
        alt: "iPad Air",
        description: "Thin, light, and versatile, perfect for work and play.",
        specs: [
          "Apple M2 chip with great performance for multitasking.",
          "Lightweight design with up to 18 hours of battery life.",
          "High-quality 1080p FaceTime HD camera and three studio-quality mics.",
        ],
        buyButton: "./order.html",
      },
    ],
  },
];

// CLEAR EXISTING CONTENT
iphoneSection.innerHTML = "";
// macSection.innerHTML = "";
ipadSection.innerHTML = "";

// Product Content
// Dynamically populate the iPhone section
iphoneProducts[0].products.forEach((product) => {
  // Create product card
  const productCard = document.createElement("div");
  productCard.classList.add("product__card");
  const productCardLink = document.createElement("a");
  productCardLink.href = "#";
  productCardLink.classList.add("product__card-link");
  productCardLink.appendChild(productCard);

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
  productCard.append(productImage);

  // Bottom Card
  const bottomCardContainer = document.createElement("div");
  bottomCardContainer.classList.add("product__card-bottom-card");
  productCard.append(bottomCardContainer);
  // Product price
  const productPrice = document.createElement("p");
  productPrice.textContent = product.price;
  bottomCardContainer.append(productPrice);

  // Buy button
  const buyButton = document.createElement("a");
  buyButton.href = product.buyButton;
  buyButton.textContent = "Buy Now";
  buyButton.classList.add("buy-button");
  bottomCardContainer.append(buyButton);

  // Product specs
  const productSpecs = document.createElement("ul");
  product.specs.forEach((spec) => {
    const specItem = document.createElement("li");
    specItem.textContent = spec;
    productSpecs.append(specItem);
  });
  productCard.append(productSpecs);

  // Append card to the section
  iphoneSection.append(productCard);
});
