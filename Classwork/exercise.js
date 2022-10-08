// Data Types

let name0 = "Sarila";
console.log(`hello ${1}`);
console.log(`hello ${"name0"}`);
console.log(`hello ${name0}`);


// Scopes

if (true) {
    let name1 = "Sonika"
    var name2 = "Aayesha"
}

console.log(name1)
console.log(name2)


// Prefix vs Postfix Addition

let a = 1, b = 1;

let c = ++a;
let d = b++;
console.log(a, b, c, d)


// Conditional

if ("0") {
    console.log("I am here")
}


// Functions

function checkAge1(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

function checkAge2(age) {
    if (age > 18) {
        return true;
    }
    return confirm('Did parents allow you?');
}


// Object Methods

function makeUser1() {
    return {
        name: "Sita",
        ref: this
    };
}

let user1 = makeUser1();

console.log(user1.ref.name);


function makeUser2() {
    return {
        name: "Sita",
        ref() {
            return this;
        }
    };
}

let user2 = makeUser2();

console.log(user2.ref().name);