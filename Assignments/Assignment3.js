// Program to find the area of Cylinder

const PI = 3.1415

let cylinder = {
    radius: 5,
    height: 10,
    findArea: function () {
        return PI * cylinder.radius ** 2 * cylinder.height
    }
}

console.log(cylinder.findArea())