import { BASE_URL } from "./constants.js";
const cards = document.querySelector(".cards")
function showData(endpoint){
    fetch(`${BASE_URL}/${endpoint}`)
    .then((response)=>{
        return response.json();

    })

    .then((data)=>{
        console.log(data);
        drawCards(data)
    })
    .catch((error)=>{
        console.log(error);
    })
}

showData("products")

function drawCards(arr){
    cards.innerHTML = "";
    arr.forEach((element) => {

        const card = document.createElement("div");
        card.classList.add("card")

        card.innerHTML=`
        <img src="${element.image}">
        <h3>${element.title}</h3>
        <P>${element.category}</p>
        <div class="det">
        <h4>${element.price}</h4>
        <button class="delete">delete</button>
        
        </div>
        
        
        `

        cards.appendChild(card)
        
    });

}
const deleteBtns = document.querySelectorAll(".delete")

deleteBtns.forEach((btn)=>{
    btn.addEventListener("click", function(){

        const id = this.getAttribute("data-id")
        deleting("products", id, this)
    })
})

function deleting(endpoint, id, btn){
    fetch(`${BASE_URL}/${endpoint}/${id}`, {
        method: "DELETE",

    })
    .then((response)=>{
        if(response.ok){
            btn.closest("tr").remove()

        }
    })
    .catch((err) => {
        console.log(err);
      });

}

window.addEventListener("DOMContentLoaded", function () {
    showData("products");
  });

// showData("products")