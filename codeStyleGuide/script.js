// Code Style Guide

// Variables
// There are 4 ways to give name to variables, function and class

// All Cap:
let HELLO_WORLD = "hello world";

// Snake Case:
let hello_world = "hello world!";

// Camel Case:
let helloWorld = "hello world...";

// Capital Case:
let HelloWorld = "hello world.";

// Use All Cap for Constant

const PI = 3.14;
const MIN = 0;
const MAX = 100;

// Use Snake Case for normal variables

let color_name = "red";
let color_code = "#112233";

// Use Camel Case for object Property

let user2 = {
    firstName: "James",
    sayHello () {
        // Statements
    },
}

// array

let users = ["Alice", "Bob", "Tom", "Mary"]; //give a space after each comma

let user1 = [
    "Alice",
    "Bob",
    "Tom",
    "Mary", // the comma in the last is called 'Trailing Comma'
]

// Comments

// Line Comment

/* Single Line Comment */

/*
Some comments with 
more than single lines
*/

// Class Name should be Capital Case

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound () {
        // Statements
    }
}

// Callback Function & Method Chaining

add(1, 2, function(a, b) {
    // Callback Function Statements
})

setTimeout(function() {
    // Callback Function Statements
}, 2000)

add(function(a, b) {
    // Callback Function Statements
}, function(c, d) {
    // Callback Function Statements
})