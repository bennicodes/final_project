// const appleProducts = [
//   {
//     category: "iPhone",
//     products: [
//       {
//         name: "iPhone 16 Pro & Pro Max",
//         price: "From: $999",
//         image: "../assets/img/iphone_16_pro_max-removebg-preview.png",
//         alt: "iPhone 16 Pro",
//         description:
//           "The first iPhone designed for Apple Intelligence. Personal, private, powerful.",
//         specs: [
//           "Camera Control gives you an easier way to quickly access camera tools.",
//           "A18 Pro chip powers Apple Intelligence and AAA gaming — and helps deliver a huge leap in battery life.",
//           "4K 120 fps Dolby Vision and 4 studio-quality mics. A Pro studio in your pocket.",
//         ],
//         buyButton: "./order.html",
//       },
//       {
//         name: "iPhone 16 & iPhone 16 Plus",
//         price: "From: $799",
//         image: "../assets/img/iphone-16-reg-removebg-preview.png",
//         alt: "iPhone 16",
//         description:
//           "The first iPhone designed for Apple Intelligence. Personal, private, powerful.",
//         specs: [
//           "Camera Control gives you an easier way to quickly access camera tools.",
//           "A18 chip enables Apple Intelligence and console-level gaming with exceptional power efficiency.",
//           "A big boost in battery life with up to 22 hours of video playback.",
//         ],
//         buyButton: "./order.html",
//       },
//     ],
//   },
//   {
//     category: "Mac",
//     products: [
//       {
//         name: "MacBook Pro",
//         price: "From: $1599",
//         image: "../assets/img/macbook-pro-removebg-preview.png",
//         alt: "MacBook Pro",
//         description:
//           "Designed for professionals with advanced performance and all-day battery life.",
//         specs: [
//           "M3, M3 Pro, or M3 Max chips for demanding tasks.",
//           "Up to 22 hours of battery life.",
//           "Liquid Retina XDR display with Extreme Dynamic Range and incredible contrast.",
//           "1080p FaceTime HD camera, studio-quality mics, and Spatial Audio speakers.",
//           "Three Thunderbolt 4 ports, HDMI, MagSafe 3, SDXC card slot, and headphone jack.",
//         ],
//         buyButton: "./order.html",
//       },
//       {
//         name: "MacBook Air",
//         price: "From: $999",
//         image: "../assets/img/Macbook-removebg-preview.png",
//         alt: "MacBook Air",
//         description:
//           "Lightweight and portable design with amazing all-day battery life.",
//         specs: [
//           "Powerful 8-core CPU and up to 10-core GPU with the Apple M2 chip.",
//           "Up to 18 hours of battery life.",
//           "13.6-inch Liquid Retina display supporting 1 billion colors.",
//           "1080p FaceTime HD camera and studio-quality mics.",
//         ],
//         buyButton: "./order.html",
//       },
//       {
//         name: "iMac",
//         price: "From: $1299",
//         image: "../assets/img/imac-removebg-preview.png",
//         alt: "iMac",
//         description:
//           "From $1299. Designed for a brilliant display and incredible performance.",
//         specs: [
//           "Portable design — Lightweight and under half an inch thin, so you can take MacBook Air anywhere you go.",
//           "Get more done faster — The powerful 8-core CPU and up to 10-core GPU of the Apple M2 chip keep things running smoothly.",
//           "Up to 18 hours of battery life — Amazing, all-day battery life so you can leave the power adapter at home.",
//           "A brilliant display — The 13.6-inch Liquid Retina display supports 1 billion colors.",
//           "Look sharp, sound great — Everything looks and sounds amazing with a 1080p FaceTime HD camera and three mics.",
//         ],
//         buyButton: "./order.html",
//       },
//     ],
//   },
//   {
//     category: "iPad",
//     products: [
//       {
//         name: "iPad Pro",
//         price: "From: $999",
//         image: "../assets/img/ipad-pro-removebg-preview.png",
//         alt: "iPad Pro",
//         description:
//           "Powerful and portable, designed for creativity and productivity.",
//         specs: [
//           "8-core CPU and up to 10-core GPU powered by the Apple M2 chip.",
//           "Lightweight design and amazing all-day battery life.",
//           "Brilliant Liquid Retina display supporting 1 billion colors.",
//         ],
//         buyButton: "./order.html",
//       },
//       {
//         name: "iPad Air",
//         price: "From: $599",
//         image: "../assets/img/ipad-air-removebg-preview.png",
//         alt: "iPad Air",
//         description: "Thin, light, and versatile, perfect for work and play.",
//         specs: [
//           "Apple M2 chip with great performance for multitasking.",
//           "Lightweight design with up to 18 hours of battery life.",
//           "High-quality 1080p FaceTime HD camera and three studio-quality mics.",
//         ],
//         buyButton: "./order.html",
//       },
//     ],
//   },
// ];

// const productCategoryContainer = document.querySelectorAll(
//   ".product__section-container"
// );
// const productCard = document.querySelectorAll(".product__card");
// const productCardHeading = document.querySelectorAll(
//   ".product__card-heading, .product__card-heading-iphone, .product__card-heading-iphone-2"
// );

// function organizeProductsByCategory(products) {
//   const categories = {};

//   // Group products by category
//   products.forEach((product) => {
//     if (!categories[product.category]) {
//       categories[product.category] = [];
//     }
//     categories[product.category].push(...product.products);
//   });

//   // Create structured HTML-like output
//   const organizedProducts = Object.keys(categories).map((category) => {
//     return {
//       category: category,
//       products: categories[category],
//     };
//   });

//   return organizedProducts;
// }

// const organizedAppleProducts = organizeProductsByCategory(appleProducts);

// document.addEventListener("DOMContentLoaded", () => {
//   // Function to insert products dynamically into the HTML
//   function insertProductsIntoHTML(productsData) {
//     // Loop through each category
//     productsData.forEach(({ category, products }) => {
//       // Find the category container in the HTML using querySelector
//       const categoryContainer = document.querySelector(
//         `.${category.toLowerCase()}-list`
//       );

//       // If the container for the category doesn't exist, skip it
//       if (!categoryContainer) {
//         console.warn(`No container found for category: ${category}`);
//         return;
//       }

//       // Clear existing content inside the category container
//       categoryContainer.innerHTML = "";

//       // Loop through each product in the category
//       products.forEach((product) => {
//         // Create constants for each part of the product
//         const productCard = document.createElement("div");
//         productCard.classList.add("product__card");

//         // Create the product link
//         const productLink = document.createElement("a");
//         productLink.href = "#";
//         productLink.classList.add("product__card-link");

//         // Create the product headings
//         const productHeading1 = document.createElement("h3");
//         productHeading1.classList.add("product__card-heading");
//         productHeading1.textContent = product.name.split("&")[0]; // First part of the name

//         const productHeading2 = document.createElement("h3");
//         productHeading2.classList.add("product__card-heading-2");
//         productHeading2.textContent = product.name.split("&")[1] || ""; // Second part of the name

//         // Create the image container
//         const imageContainer = document.createElement("div");
//         imageContainer.classList.add("product__card-image-container");
//         const productImage = document.createElement("img");
//         productImage.src = product.image;
//         productImage.alt = product.alt;
//         productImage.classList.add("product__card-image");
//         imageContainer.appendChild(productImage);

//         // Create the paragraph for price and buy link
//         const priceParagraph = document.createElement("p");
//         priceParagraph.classList.add("card__paragraph");
//         priceParagraph.innerHTML = `${product.price} <a href="${product.buyButton}" target="_blank" class="product__buy-link">Buy</a>`;

//         // Append headings, image, and price to the link
//         productLink.append(productHeading1);
//         productLink.append(productHeading2);
//         productLink.append(imageContainer);
//         productLink.append(priceParagraph);

//         // Append the link to the product card
//         productCard.append(productLink);

//         // Create the product specs list
//         const specsList = document.createElement("ul");
//         specsList.classList.add("product__list");

//         const specsHeading = document.createElement("h4");
//         specsHeading.classList.add("product__list-heading");
//         specsHeading.textContent = product.name;
//         specsList.append(specsHeading);

//         product.specs.forEach((spec) => {
//           const specItem = document.createElement("li");
//           specItem.classList.add("product__list-specs");
//           specItem.textContent = spec;
//           specsList.append(specItem);
//         });

//         // Append the product card and specs to the category container
//         categoryContainer.append(productCard);
//         categoryContainer.append(specsList);
//       });
//     });
//   }

//   // Call the function with the appleProducts array
//   insertProductsIntoHTML(appleProducts);
// });
