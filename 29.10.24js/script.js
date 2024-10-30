// 1------

// let a = +prompt("birinci ededi daxil edin: ");
// let b = +prompt("ikinci ededi daxil edin: ");
// let c = +prompt("ucuncu ededi daxil edin: ");
// let ab = a + b;
// let ac = a + c;
// let bc = b + c;


// if (ab > ac && ab> bc){
//     alert(`${a} ve ${b}`);
// }
// else if (ac > ab && ac> bc){
//     alert(`${a} ve ${c}`);
// }
// else if (bc > ac && bc> ab){
//     alert(`${b} ve ${c}`);
// }

// else{
//     alert("duzgun eded daxil edin.")
// }

// 2----

// let a = prompt("birinci ededi daxil edin: ");
// let b = prompt("ikinci ededi daxil edin: ");
// let c = prompt("ucuncu ededi daxil edin: ");

// let abc = +(a + b + c);
// let bac = +(b + a + c);
// let bca = +(b + c + a);
// let acb = +(a + c + b);
// let cab = +(c + a + b);
// let cba = +(c + b + a);

// if (abc > bac && abc > bca && abc > acb && abc > cab && abc && cba){
//     alert(abc);
// }
// else if (bac > abc && bac > bca && bac > acb && bac > cab && bac > cba){
//     alert(bac);
// }
// else if (bca > abc && bca > bac && bca > acb && bca > cab && bca > cba){
//     alert(bca);
// }
// else if (acb > abc && acb > bca && acb > bac && acb > cab && acb > cba){
//     alert(abc);
// }
// else if (cab > abc && cab > bca && cab > acb && cab > bac && cab > cba){
//     alert(cab);
// }
// else if (cba > abc && cba > bca && cba > acb && cba > cab && cba > bac){
//     alert(cba);
// }

// else{
//     alert("duzgun eded daxil edin.")
// }


// 3-----

// let katet1 = +prompt("katet1: ");
// let katet2 = +prompt("katet2: ");
// let hipo = +prompt("hipotenuz: ");

// let katet_kv = katet1 ** 2 + katet2 ** 2;
// let hipo_kv = hipo ** 2;

// if ( katet_kv == hipo_kv){
//     alert("duzbucaqli ucbucaqdir.")

// }
// else{
//     alert("duzbucaqli ucbucaq deyil.")
// }


// 4----

// let eded = +prompt("ucreqemli eded daxil edin: ");
// let reqem1 = Math.floor(eded / 100); 
// let reqem2 = Math.floor((eded % 100) / 10);
// let reqem3 = Math.floor(eded % 10);

// if (eded > 99 && eded < 1000){
//     alert(`reqemler: ${reqem1}, ${reqem2}, ${reqem3}`)


// }

// else{
//     alert("zehmet olmasa ucreqemli eded daxil edin!")
// }

// 5----

// let month = prompt("ay daxil edin: ");

// switch (month) {
//     case "yanvar":
//         alert("31 gun")
        
//         break;
//     case "fevral":
//          alert("28/29 gun")
            
//         break;
     
//     case "mart":
//         alert("31 gun")
        
//         break;
//     case "aprel":
//          alert("30 gun")
            
//         break;
     
//     case "may":
//         alert("31 gun")
        
//         break;
//     case "iyun":
//          alert("30 gun")
            
//         break;
     
//     case "iyul":
//         alert("31 gun")
        
//         break;
//     case "avqust":
//          alert("31 gun")
            
//         break;
//     case "sentyabr":
//         alert("30 gun")
        
//         break;
//     case "oktyabr":
//          alert("31 gun")
            
//         break;
     
//     case "noyabr":
//         alert("30 gun")
        
//         break;
//     case "dekabr":
//          alert("31 gun")
            
//         break;
     
//     default:
//         alert("duzgun ay daxil edin.")
//         break;
// }