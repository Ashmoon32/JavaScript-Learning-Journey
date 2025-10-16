//basic function
function sayHello(){
    console.log("Hello, world!");
}

sayHello(); // Output: Hello, world!

//function with parameter
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Nyein"); // Output:  Hello, Nyein!
greet("Ashmoon"); // Hello, Ashmoon!

//return function
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log("Sum:", sum); // Sum: 8