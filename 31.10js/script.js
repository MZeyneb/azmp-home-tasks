let array = [12, 23, 43, 54, 65, 67, 89, 90, 100, 12];
// let eded = +prompt("eded daxil edin: ")
// for (let i = 0; i < array.length; i++) {
//     if(array[i] == eded){
//         alert(`${array[i]} tekrar olunub.`);
//     }
//     else{
//         alert("tekrar yoxdur.")
//         break;
//     }
    
    
// }


// 10

// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
//     { name: "Davud", scores: [100, 100, 100] }
//   ];




// for (let i = 0; i < students.length; i++) {
//     let cem = 0;
//     let ortalama = 0;
//     let skor = [];
//     for (let j = 0; j < (students[i].scores).length; j++) {
//         cem += students[i].scores[j];
        
        
//     }

//     ortalama = cem / (students[i].scores).length;
    
    
    
//     console.log(`${students[i].name} ortalama: ${ortalama}`);
//     if(ortalama > 90 ){
//         console.log(`${students[i].name} ortalamasi 90-dan boyukdur.`);

//     }
// }

// 11

let soz = prompt("soz daxil edin: ");
let reverse = "";
for (let i = soz.length-1; i >= 0; i--) {
    reverse+= soz[i];

}

if(soz == reverse){
    alert(`polindromdur. ${soz} ---> ${reverse}`);
}
else{
    alert(`polindrom deyil. ${soz} ---> ${reverse}`);
}