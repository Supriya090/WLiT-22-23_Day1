// Finding if a number is positive or negative

function isPositive(num1) {
    return (num1 > 0) ? "Positive" :
        (num1 < 0) ? "Negative" : "Zero";
}

console.log(isPositive(0))