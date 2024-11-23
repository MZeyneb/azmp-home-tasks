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

function drawCards(arr){
    cards.innerHTML = "";
    arr.forEach((element) => {

        const card = document.createElement("div");
        card.classList.add("card")

        card.innerHTML=`
        <img src="${element.image}">
        <h3>${element.title}</h3>
        <P>${element.category}</p>
        <h4>${element.price}</h4>
        
        
        `

        cards.appendChild(card)
        
    });

}

// showData("products")