class Rectangle{
    constructor(width, height){

        this.width = width;
        this.height = height;

    }

    calculateArea(){
        return this.width * this.height;

    }

    calculatePerimeter(){
        return 2 * (this.width + this.height);
    }
}

const rect = new Rectangle(3,6);

console.log("Area of rectangle:", rect.calculateArea());  
console.log("Perimeter of rectangle:", rect.calculatePerimeter());  

