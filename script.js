const products = [
  { name: "Smartphone", category: "electronics", price: 699, rating: 4.5 },
  { name: "Laptop", category: "electronics", price: 1299, rating: 4.7 },
  { name: "T-shirt", category: "clothing", price: 25, rating: 4.2 },
  { name: "Headphones", category: "electronics", price: 199, rating: 4.4 },
  { name: "Jeans", category: "clothing", price: 50, rating: 4.1 }
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    productList.appendChild(div);
  });
}

function applyFilters() {
  let filtered = [...products];

  const category = categoryFilter.value;
  const sortBy = sortFilter.value;

  // Fix 1: Only filter if category is not 'all'
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  // Fix 2: Match sort values with your HTML option values
  if (sortBy === "priceAsc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "priceDesc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", applyFilters);
sortFilter.addEventListener("change", applyFilters);

// ✅ "Clear All Filters" button logic
document.getElementById('clearFilters').addEventListener('click', function () {
  categoryFilter.value = 'all';
  sortFilter.value = 'default';
  displayProducts(products); // Reset to all
});

// Initial load
displayProducts(products);
