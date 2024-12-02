import { carsData } from "./data.js";

const cards = document.querySelector(".cards");
let data = []
let basket = JSON.parse(localStorage.getItem("basket")) || []; // Retrieve basket data or initialize as an empty array
let add = document.querySelectorAll(".add")
function rendering(arr){
    cards.innerHTML = "";
    arr.forEach((car, index)=>{
        const card = document.createElement("div");
        card.classList.add("card")
        card.innerHTML=`

                        <div class= "top">
                        <h2>${car.name}</h2>
                        <p>${car.type}</p>
                        <div class="imgplace">
                        <img src="${car.image}" alt="">
                        
                        </div>
                        
                        </div>

                        <div class= "bottom">
                        <div class="icons">
                            <i class="fa-solid fa-gas-pump"></i>
                            <p>${car.fuel}</p>
                            <i class="fa-solid fa-circle-notch"></i>
                            <p>${car.transmission}</p>
                            <i class="fa-solid fa-people-line"></i>
                            <p>${car.passengers}</p>

                        </div>
                        <div class="price">
                            <span>$${car.price}</span>
                            <button class="add" data-index="${index}">Add to Basket</button>
                        </div>
                        
                        </div>


        
        
        `

        cards.appendChild(card);

    })

}

add.forEach(button => {
    button.addEventListener("click", (event)=>{
        const index = event.target.dataset.index;
        const selected = arr[index];
        addToBasket(selected)

        
    })
    
});


function addToBasket(car) {
    basket.push(car);
    localStorage.setItem("basket", JSON.stringify(basket));
    window.location.href = "basket.html"; 
}
rendering(carsData)