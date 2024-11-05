// function upper(sentence){
//     let herfler = sentence.split("");
//     let str = "";
//     for (let i = 0; i < herfler.length; i++) {
//         str+=herfler[i].toUpperCase()
        
//     }
//     console.log(str);
// }

// upper("Salam necesiuz");


// 2

// function longest(sentence){
//     let words = sentence.split(" ")
//     let long = words[0];
//     for (let i = 0; i < words.length; i++) {
//         if(words[i].length > long.length ){
//             long= words[i]
//         }
        
//     }    
//     console.log(long);
    
// }

// longest("hello my name is yes")

// 3

// function reverse(sentence){
    
//     console.log(sentence.split("").reverse().join(""));
// }

// reverse("hello and hi")


// 4

// function replacement(sentence, change1, change2){
//     let neww = sentence.toLowerCase().replaceAll("a", "z");
//     console.log(neww);
    
// }

// replacement("salam")


// 5

// ARRAY METHODS
// 1)

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// function meat(){
//     if(!shoppingCart.includes("meat")){
//         shoppingCart.unshift("meat")
//     }
//     console.log(shoppingCart);
    
// }

// meat();

// function sugar(){
//     if(!shoppingCart.includes("sugar")){
//         shoppingCart.push("sugar")
//     }
//     console.log(shoppingCart);
    
// }

// sugar();
// function tea() {
//     let shopping_str = shoppingCart.join(" ")
//     console.log(shopping_str.replaceAll("Tea", "GreenTea").split(" "));
    
    
// }

// tea();

// 2)

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

// function reverse_array(){
//     countries.reverse();
//     console.log(countries);
    
// }

// reverse_array();

// function remove(){
//     countries.splice(2,2, "Azerbaijan");
//     console.log(countries);
    
// }

// remove()


// 3)
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// function concate(){
//     let fullStack = frontEnd.concat(backEnd)
//     console.log(fullStack);
    
// }

// concate()
  
// 4

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// function company_slice(){
//     const first_three = itCompanies.slice(0, 3);
//     console.log(first_three);
    
// }

// company_slice()

// function company_slice_last(){
//     const first_three = itCompanies.slice(-3);
//     console.log(first_three);
    
// }

// company_slice_last()

// function company_slice_last(){
//     if (itCompanies.length % 2 == 0){
//         console.log(itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2 + 1));
        
//     }
//     else if (itCompanies.length % 2 != 0){
//         console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2 +1)));
        
//     }
    
// }

// company_slice_last()

// function sorted(){
//     itCompanies.sort()
//     console.log(itCompanies);
    
// }
// sorted()

// function upper(){
//     let upper_array = [];
//     for (let i = 0; i < itCompanies.length; i++) {
//         let str = ""
//         for (let j = 0; j < itCompanies[i].length; j++) {
//             str+=itCompanies[i][j].toUpperCase()
//         }
        
//         upper_array.push(str)
//     }
//     console.log(upper_array);
    
// }
// upper()

// function exist(){
//     if(itCompanies.includes("Google"))
//         console.log("Google");
        
//     else{
//         console.log("Company not found.");
        
//     }

// }
// exist()

// function letter_unique(){
//     for (let i = 0; i < itCompanies.length; i++) {
//         if(itCompanies[i].toLowerCase().includes("o")){

//             if(itCompanies[i].toLowerCase().indexOf('o') == itCompanies[i].toLowerCase().lastIndexOf('o')){
//                 console.log(itCompanies[i]);
                
//             }

//         }
        
        
//     }
// }
// letter_unique()

// 5)


// function star(array1, array2, char){
//     let array = array1.concat(array2);
//     let array_str = array.join("*")
//     console.log(array_str);
    
// }
// star([3,5,6], [2,1,5])


// ---

// let array = [12,56,96,47,65,15,20,5];

// function artan() {
//     let sorted = array.sort((a, b)=>a-b);
//     console.log(sorted);
// }
// artan()

