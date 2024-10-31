// 1---------

// let number = +prompt("zehmet olmasa ucreqemli eded daxil edin: ");
// let digit3 = number % 10;
// let digit2 = (number % 100 - digit3) / 10;
// let digit1 = (number - number%100)/100;
// let sum = digit1 + digit2 + digit3;
// let multiply = digit1 * digit2 * digit3;
// let average = sum / 3;
// alert(`Cem: ${sum}, Ededi orta: ${average}, Hasil: ${multiply}`);

// 2--------

// let number = +prompt("Eded daxil edin: ");
// for (let i = 0; i <= number; i++) {
//     if(number % i == 0){
//         console.log(i);
//     }
// }

// 3--------
// let number = +prompt("Eded daxil edin.");
// let count = 0;
// for (let i = 0; i <= number; i++) {
//     if (number % i == 0) {
//         count++
//     }    
// }
// alert(count)

// 4-------


// 5-------


// 6-------

let sumOdd = 0
let sumEven = 0
 for (let i = 0; i <100; i++) {
  if  (i%2 == 1){
      sumOdd++;
}
}
console.log(sumOdd);
for (let i = 0; i <= 100; i++) {
 if(i%2 == 0){
   sumEven++;
}   
}
console.log(sumEven);