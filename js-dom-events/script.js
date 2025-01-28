import { products } from "./data.js";

const productList = document.querySelector(".product-list");
const searchInput = document.querySelector("#searchInput");
const sortButton = document.querySelector("#sortButton");

function displayProducts(products) {
    productList.innerHTML = ""; 
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" width="100">
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <p>${product.description}</p>
            <button class="delete-button" data-id="${product.id}">Delete</button>
        `;
        productList.appendChild(productCard);
    });

    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const productId = e.target.getAttribute("data-id");
            deleteProduct(productId);
        });
    });
}

function deleteProduct(id) {
    const index = products.findIndex((product) => product.id == id);
    if (index !== -1) {
        products.splice(index, 1);
        displayProducts(products); 
    }
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
});

sortButton.addEventListener("click", () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    displayProducts(sortedProducts);
});

displayProducts(products);
