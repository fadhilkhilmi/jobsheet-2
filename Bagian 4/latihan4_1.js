const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 5,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" },
    ],
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    category: "phones",
    stock: 15,
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" },
    ],
  },
  {
    id: 3,
    title: "Headphones",
    price: 100,
    category: "audio",
    stock: 3,
    rating: 4.3,
    tags: ["audio", "electronics", "music"],
    dimensions: { width: 18, height: 20, depth: 8 },
    reviews: [
      { user: "F", rating: 5, comment: "Great sound quality" },
      { user: "G", rating: 4, comment: "Comfortable" },
    ],
  },
  {
    id: 4,
    title: "Keyboard",
    price: 50,
    category: "accessories",
    stock: 20,
    rating: 4.1,
    tags: ["computer", "accessories", "office"],
    dimensions: { width: 45, height: 3, depth: 15 },

    reviews: [
      { user: "H", rating: 4, comment: "Good keyboard" },
      { user: "I", rating: 5, comment: "Nice typing" },
    ],
  },
  {
    id: 5,
    title: "Mouse",
    price: 25,
    category: "accessories",
    stock: 8,
    rating: 4.0,

    tags: ["computer", "accessories"],

    dimensions: {
      width: 7,
      height: 4,
      depth: 12,
    },

    reviews: [
      {
        user: "J",
        rating: 4,
        comment: "Smooth",
      },
      {
        user: "K",
        rating: 4,
        comment: "Affordable",
      },
    ],
  },

  {
    id: 6,
    title: "Monitor",
    price: 300,
    category: "computer",
    stock: 12,
    rating: 4.6,

    tags: ["display", "computer", "office"],

    dimensions: {
      width: 60,
      height: 40,
      depth: 15,
    },

    reviews: [
      {
        user: "L",
        rating: 5,
        comment: "Sharp display",
      },
      {
        user: "M",
        rating: 4,
        comment: "Good monitor",
      },
    ],
  },

  {
    id: 7,
    title: "Tablet",
    price: 500,
    category: "devices",
    stock: 7,
    rating: 4.4,

    tags: ["mobile", "device", "electronics"],

    dimensions: {
      width: 25,
      height: 1,
      depth: 18,
    },

    reviews: [
      {
        user: "N",
        rating: 5,
        comment: "Fast tablet",
      },
      {
        user: "O",
        rating: 4,
        comment: "Good screen",
      },
    ],
  },

  {
    id: 8,
    title: "Printer",
    price: 200,
    category: "office",
    stock: 10,
    rating: 4.2,

    tags: ["office", "printing", "computer"],

    dimensions: {
      width: 40,
      height: 25,
      depth: 30,
    },

    reviews: [
      {
        user: "P",
        rating: 4,
        comment: "Works well",
      },
    ],
  },

  {
    id: 9,
    title: "Camera",
    price: 900,
    category: "camera",
    stock: 4,
    rating: 4.7,

    tags: ["camera", "photo", "electronics"],

    dimensions: {
      width: 15,
      height: 10,
      depth: 8,
    },

    reviews: [
      {
        user: "Q",
        rating: 5,
        comment: "Excellent camera",
      },
      {
        user: "R",
        rating: 4,
        comment: "Clear image",
      },
    ],
  },

  {
    id: 10,
    title: "Smartwatch",
    price: 250,
    category: "wearable",
    stock: 18,
    rating: 4.3,

    tags: ["wearable", "smart", "device"],

    dimensions: {
      width: 5,
      height: 1,
      depth: 5,
    },

    reviews: [
      {
        user: "S",
        rating: 4,
        comment: "Useful",
      },
      {
        user: "T",
        rating: 5,
        comment: "Good battery",
      },
    ],
  },
];

function getAllTags(products) {
  return products.flatMap((product) => product.tags);
}

console.log(getAllTags(products));
