// Area of rectangle and square

let rectangle = {
    length: 10,
    breadth: 5,
    area: findArea,
}

let square = {
    length: 10,
    breadth: 10,
    area: findArea,
}

function findArea() {
    return this.length * this.breadth;
}


console.log("Area of Rectangle: " + rectangle.area())
console.log("Area of Square: " + square.area())

