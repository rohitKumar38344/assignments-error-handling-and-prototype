// QUESTION: 10

const products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Hat", category: "Accessories" },
  { name: "Sunglasses", category: "Accessories" },
];

const filterByCategory = function (products) {
  return function (category) {
    return products.filter((v) => v.category === category);
  };
};

const clothingProducts = filterByCategory(products)("Accessories");

console.log(clothingProducts);
