const basketItems = document.querySelector(".basket-items");
const basket = JSON.parse(localStorage.getItem("basket")) || [];

function displayBasket() {
    basketItems.innerHTML = "";
    if (basket.length === 0) {
        basketItems.innerHTML = "<p>Your basket is empty!</p>";
        return;
    }

    basket.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("basket-item");
        itemDiv.innerHTML = `
            <div>
                <h2>${item.name}</h2>
                <p>${item.type}</p>
                <p>Price: $${item.price.toFixed(2)}</p>
            </div>
            <button class="remove" data-index="${index}">Remove</button>
        `;
        basketItems.appendChild(itemDiv);
    });

    document.querySelectorAll(".remove").forEach(button => {
        button.addEventListener("click", (event) => {
            const index = event.target.dataset.index;
            removeItem(index);
        });
    });
}

function removeItem(index) {
    basket.splice(index, 1);
    localStorage.setItem("basket", JSON.stringify(basket));
    displayBasket();
}

displayBasket();
    