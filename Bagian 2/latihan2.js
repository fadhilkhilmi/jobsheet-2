const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Keyboard", price: 50, category: "accessories", stock: 20 },
  { id: 5, title: "Mouse", price: 25, category: "accessories", stock: 8 },
  { id: 6, title: "Monitor", price: 300, category: "computer", stock: 12 },
  { id: 7, title: "Tablet", price: 500, category: "devices", stock: 7 },
  { id: 8, title: "Printer", price: 200, category: "office", stock: 10 },
  { id: 9, title: "Camera", price: 900, category: "camera", stock: 4 },
  { id: 10, title: "Smartwatch", price: 250, category: "wearable", stock: 18 },
  { id: 11, title: "Speaker", price: 150, category: "audio", stock: 6 },
  { id: 12, title: "Microphone", price: 120, category: "audio", stock: 9 },
  { id: 13, title: "Webcam", price: 80, category: "computer", stock: 14 },
  { id: 14, title: "Router", price: 70, category: "network", stock: 25 },
  { id: 15, title: "Hard Drive", price: 110, category: "storage", stock: 11 },
  { id: 16, title: "SSD", price: 150, category: "storage", stock: 13 },
  { id: 17, title: "Flash Disk", price: 20, category: "storage", stock: 30 },
  {
    id: 18,
    title: "Power Bank",
    price: 40,
    category: "accessories",
    stock: 16,
  },
  { id: 19, title: "Charger", price: 15, category: "accessories", stock: 22 },
  { id: 20, title: "Cable USB", price: 10, category: "accessories", stock: 35 },
  { id: 21, title: "Gaming PC", price: 2000, category: "computer", stock: 2 },
  { id: 22, title: "VR Headset", price: 600, category: "gaming", stock: 5 },
  { id: 23, title: "Controller", price: 60, category: "gaming", stock: 17 },
  {
    id: 24,
    title: "Keyboard Gaming",
    price: 90,
    category: "gaming",
    stock: 12,
  },
  { id: 25, title: "Mouse Gaming", price: 70, category: "gaming", stock: 19 },
  { id: 26, title: "Projector", price: 700, category: "office", stock: 6 },
  { id: 27, title: "Scanner", price: 180, category: "office", stock: 8 },
  {
    id: 28,
    title: "Laptop Stand",
    price: 35,
    category: "accessories",
    stock: 21,
  },
  { id: 29, title: "Cooling Fan", price: 45, category: "computer", stock: 10 },
  {
    id: 30,
    title: "Graphics Card",
    price: 1000,
    category: "computer",
    stock: 3,
  },
];

function findProductById(products, id) {
  return products.find((product) => product.id === id);
  1;
}

function findProductBystock(products, stock) {
  return products.filter((product) => product.stock < 10);
}
function updateStock(products, id, newStock) {
  return products.map((p) => (p.id === id ? { ...p, stock: newStock } : p));
}

console.log(findProductById(products, 25));
console.log(findProductBystock(products));

const updatedProducts = updateStock(products, 25, 20);
console.log(updatedProducts);
