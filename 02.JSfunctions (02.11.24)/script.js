// 1

// function power(number, exponent){
//     console.log(number ** exponent);

// }

// power(5, 3);

// 2

// function moving(array, number, move){
//     const num = array[number];
//     array[number] = array[move]
//     array[move] = num;
//     console.log(array);

 

// }

// moving([3,6,2,8,5,7], 0, 4)

// 3

// function repeated(array){
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         let flag = false;
//         for (let j = 0; j < result.length; j++) {
//             if( array[i] == array[j]){
//                 flag = true;
//                 break;
                
//             }
            

//         }
//         if (!flag){
//             result.push(array[i])
//         }
       
        
        
//     }
//     console.log(result);
    
// }
// repeated([2,3,6,8,5,2,8,3,4])


// 4

// function upper(){
//     
//     let sentence = prompt("Cumle daxil edin: ")
//     let flag = false;
//     let result = ""
//     for (let i = 0; i < sentence.length; i++) {
        
       
//         if (sentence[i]!= " " && !flag){
//             flag = true;
//             if (i == 0){
//                 result += sentence[i].toUpperCase()
//             }
            
            
//         }
//         else{
//             result += sentence[i]
            


//         }
//         if(sentence[i]== " "){
//             flag = false;
//             result += sentence[i+1].toUpperCase()
//         }  
//     }
//     console.log(result); 
// }

// upper();

// 5

// function connect(array1, array2){
//     let result = [];
//     for (let i = 0; i < array1.length; i++) {
//         result.push(array1[i])
        
//     }
//     for (let i = 0; i < array1.length; i++) {
//         result.push(array2[i])
        
//     }

//     console.log(result);
    

// }

// connect([3,6,2,6,8], [2,8,4,1,7])

// 6

// function word_count(){
//     let count = 0;
//     let sentence = prompt("cumle daxil edin: ");
//     let flag = false;

//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] != " " && !flag){
//             count++
//             flag = true;
//         }
//         else if(sentence[i] == " "){
//             flag = false;

//         }
//     }
//     console.log(count);
    

// }

// word_count();

// 7


// function median(array){
//     if(array.length%2 == 0){
//         console.log((array[array.length/2] + array[(array.length/2) - 1])/2);
        
//     }
//     else if(array.length%2 != 0){
//         console.log(array[Math.floor(array.length/2)]);
//     }
// }

// median([2,3,12,54,2,6,7,8,3,45,4,2])


// 8



// function dub_free(array){
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         let unique = true;
        
        
//         for (let j = 0; j < result.length; j++) {
//             if(array[i] == result[j]){
//                 unique = false;
//                 break;
               
//             }
            
//         }
    
//         if (unique == true){
//             result.push(array[i])
//         }
//     }

//     console.log(result);

// }

// dub_free([2,3,4,5,2,8,3,5,1,8,1,2])

// 9

// function indexSum(str, char){
//     let sum = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == char){
//             sum += i
//         }
        
//     }
//     console.log(sum);
    
// }
// indexSum("salamlarr", "a")

// 10

// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];

// function first_three(){

//     let result = [];
//     for (let i = 0; i < countries.length; i++) {
//         let str = ""
//         for (let j = 0; j < 3; j++) {
//         str+=(countries[i][j].toUpperCase())            
//         }

//         result.push(str)
        
//     }

//     console.log(result);
    
// }

// first_three();


// 11

// function swap_case(string){
//     let result = ""
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == string[i].toUpperCase()){
//             result += string[i].toLowerCase()
//         } 
//         else if(string[i] == string[i].toLowerCase()){
//             result+= string[i].toUpperCase()
//         }
        
//     }
//     console.log(result);
    
// }

// swap_case("Salam HeR kESE");

// 12

// function compare(array1, array2){
//     let flag = true;
    
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] != array2[i] && flag){
//             console.log("Not identical");
//             flag = false;
//             break;
            
//         }
//         else if(array1[i] == array2[i] && flag){
//             flag = true;
            
//         }
        
//     }

//     if(flag == true){

//         console.log("identical");

//     }
  
// }

// compare([2,5,6,2], [2,5,6,2])