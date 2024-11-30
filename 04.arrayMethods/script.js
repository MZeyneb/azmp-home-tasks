let arr = [
    {
      name: "test",
      key: 1,
    },
    {
      name: "task",
      key: 2,
    },
    {
      name: "tanqo",
      key: 3,
    },
    {
      name: "like",
      key: 4,
    },
    {
      name: "task",
      key: 5,
    },
    {
      name: "trust",
      key: 6,
    },
    {
      name: "test",
      key: 7,
    },
    {
      name: "last",
      key: 8,
    },
    {
      name: "tanqo",
      key: 9,
    },
    {
      name: "elephant",
      key: 10,
    },
    {
      name: "love",
      key: 11,
    },
    {
      name: "small",
      key: 12,
    },
    {
      name: "little",
      key: 13,
    },
  ];


// 1

// let newArr = arr.filter(obj=> obj.name.startsWith("t"));
// console.log(newArr);


// 2

// let newArr = arr.filter(obj=> obj.name.startsWith("t") && obj.name.endsWith("t"))
// console.log(newArr.length);


// 3
// let sum = 0;
// newArr.forEach(element => {
//     sum+= element.key;

    
// });

// console.log(sum);


// 4

// arr.forEach(element=>{
//     if (element.name.startsWith("t")){
//         element.name = "SuperDev"
//     }
// })

// console.log(arr);


// 5

// let longest = arr.reduce((max, obj)=> {
//     if(obj.name.length > max.name.length){
//         max = obj
//     }
//     return max    
// }, arr[0])

// console.log(longest);

// 6

// console.log(longest.key);

// 7
// let indexi = arr.findIndex(obj=> obj == longest)
// console.log(indexi ** 2);


// 8

// let newArr = arr.filter(obj => obj.name.length == 4)
// console.log(newArr);

// 9

// let longestKey = arr.reduce((max, obj)=> {
//     if(obj.key > max.key){
//         max = obj
//     }
//     return max    
// }, arr[0])
// console.log(longestKey.name);

// 10

// let twol = arr.filter(obj=>obj.name.split("l").length - 1 == 2)

// console.log(twol);


// 11

// let atleasttwo = arr.filter(obj=>obj.name.split("t").length - 1 >= 2)
// console.log(atleasttwo);

// 12

// let newArr = arr.filter(obj => obj.key > 10 && obj.name.startsWith("l"));
// console.log(newArr);
