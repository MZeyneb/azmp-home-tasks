import { carsData } from "./data.js";

const cards = document.querySelector(".cards");
let data = []
function rendering(arr){
    cards.innerHTML = "";
    arr.forEach((car)=>{
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
                            <button class="add">Add to Basket</button>
                        </div>
                        
                        </div>


        
        
        `

        cards.appendChild(card);

    })

}

rendering(carsData)