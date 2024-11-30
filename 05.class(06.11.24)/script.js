// class Rectangle{
//     constructor(width, height){

//         this.width = width;
//         this.height = height;

//     }

//     calculateArea(){
//         return this.width * this.height;

//     }

//     calculatePerimeter(){
//         return 2 * (this.width + this.height);
//     }
// }

// const rect = new Rectangle(5,8);

// console.log("Area of rectangle:", rect.calculateArea());  
// console.log("Perimeter of rectangle:", rect.calculatePerimeter());  

// 2

// class BankAccount{

//     constructor(accountNumber, balance){
//         this.accountNumber = accountNumber;
//         this.balance = balance

//     }

//     deposit(amount){
//         if (amount>0){
//             this.balance+= amount;
//             console.log(`${amount} meblegi hesabiniza elave edildi. Cari balans: ${this.balance}`);

//         }
//         else{
//             console.log("mebleg en az 1 AZN deyerinde olmalidir!");
            
//         }
//     }

//     withdraw(amount){
//         if (amount >0){
//             this.balance-= amount
//             console.log(`${amount} meblegi hesabinizdan cixarildi. Cari balans: ${this.balance}`);
            

//         }
//         else if(amount > this.balance){
//             console.log("Hesabinizda kifayet qeder mebleg yoxdur.");
            
//         }
//         else{
//             console.log("Cixarilacaq mebleg en azi 1 AZN deyerinde olmalidir!");
            
//         }
//     }
// }

// const acc1 = new BankAccount("101", 200);
// const acc2 = new BankAccount("102", 582);

// acc1.deposit(500)
// acc1.withdraw(200)

// acc2.deposit(700)
// acc2.withdraw(100)

