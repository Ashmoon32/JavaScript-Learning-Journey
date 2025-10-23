// Two ways to creat an Array

// First way
let student1 = new Array("John Doe", 21, 11);

console.log("First Student : ");
console.log("Name : " + student1[0]);
console.log("Age : " + student1[1]);
console.log("Grade : " + student1[2]);

console.log("--------------------------------- ");
// Second way
let student2 = ["Albert", 22, 12];
console.log("Second Student :");
console.log(`Name : ${student2[0]}`);
console.log(`Age : ${student2[1]}`);
console.log(`Grade : ${student2[2]}`);

console.log("--------------------------------- ");

//add value with index
student1[3] = 'A';
student2[3] = 'B';

console.log(student1);
console.log(student2);

console.log("--------------------------------- ");

//Array length method

console.log(student1.length);
console.log(student1[student1.length - 1]); // get last value of array

console.log("--------------------------------- ");

// 2 dimentional array 

let numberAnimal = [ [123, 456, 789], ['cat', 'dog', 'ant']];

console.log(numberAnimal[0][0]); // 123
console.log(numberAnimal[1][0]); // cat
console.log(numberAnimal[0][2]); // 789
console.log(numberAnimal[1][1]); // dog

console.log("--------------------------------- ");

//Common Array method

let animals = ["Dog", "Cat", "Monkey"];

animals.push("Ant"); // add to last 
animals.pop(); // no need argument , remove from last
animals.shift(); // remove from first
animals.unshift("Elephant"); // add to first

console.log(animals);

console.log("--------------------------------- ");
// splice and indexOf

let fruits = ["Apple", "Orange", "Mango", "Banana"];

fruits.indexOf("Mango"); // get the index number of 'Mango'

fruits.splice(2, 1); // frist argument '2' is index number and second argument '1' is the number of index that you want to remove.

console.log(fruits); // ["Apple", "Orange", "Banana"];

console.log("--------------------------------- ");

// join 

let result = fruits.join(",");

console.log(result);

console.log(result[0]);
console.log("--------------------------------- ");

//Pure function array method means that instead of changing original array , they give result with new arrays

//map()

let nums = [1, 2, 3, 4, 5];

let value1 = nums.map(function(n)  {
    return n + 1;
});

//short form

value1 = nums.map( n => n + 1 ); //remove parentheses , '()' , from parameter  if only one para and  remove brackets and add ES6 arrow ' => ' and lastly remove 'return' if expression inside block is only one.

console.log(value1);
// parameter 'n' is the current value from array 1,2,3,4,5 and each array index addition with '1' and return new array -> [2, 3, 4, 5, 6];

console.log("--------------------------------- ");

//filter

let value2 = nums.filter(function(n) {
    return n % 2;
});

//short 

value2 = nums.filter( n => ( n % 2));

console.log(value2);
// Only return true value 

console.log("--------------------------------- ");

//reduce

let value3 = nums.reduce(function(a, n) {
    return a + n;
});

//short

// In reduce method , there are two parameters! 'a' is accumulative value , value is 'null' in initial and 'n' is current value from array.
// like this
// nums = [1, 2, 3, 4, 5]; and a is null
// a = null + n = 1 then a get 1, next now a = 1 + n = 2 ,so now a is 3 and add like this till n = 5 , and it return the total value '15'
value3 = nums.reduce( (a, n) => a + n);

console.log(value3);

console.log("--------------------------------- ");

// You can use the combination of all these methods

let number = [ 1, 2, 3, 4, 5, 6];

let finalValue = number.map( n => n + 1).filter( n => n % 2).reduce( (a, n) => a + n );

// guess first the answer , genius :))

console.log(finalValue);

console.log("--------------------------------- ");

// spread operator

let num1 = [1, 2, 3];
let alphas = [ 'a', 'b', 'c'];
let result1 = [num1, alphas];
let result2 = [...num1, ...alphas];
console.log(result1);
console.log(result2);

console.log("--------------------------------- ");

let num2 = [1, 2, 3];
let four = [...num2, 4];
let zero = [0, ...num2]
console.log(four);
console.log(zero);

console.log("--------------------------------- ");

function add1(a,b){
    return a + b;
}

let num3 = [123, 456];

console.log(add1(num3[0],num3[1]));
console.log(add1(...num3));

console.log("--------------------------------- ");

// Destructuring

// let num4 = [124, 456];
// let a = num4[0];
// let b = num4[1];

// console.log(a);
// console.log(b);

//instead of above , write like this

num4 = [124, 456];
let [a, b] = num4;
console.log(a);
console.log(b);

function add2([a, b]){
    return a + b;
}
let num5 = [123, 456];
console.log(add2(num5));


console.log("--------------------------------- ");

// String object

let num6 = 3.14159;
console.log(num6.toFixed(3));
console.log(num6.toFixed(2));

//String constructor, String Literal and Template Literal

let name1 = "Ashmoon";
let greet = `Hello ${name1}`;
let welcome = new String("Welcome");

console.log(name1.length);
console.log(welcome.length);
console.log('Hello'.length);

// Standard String Method
console.log(name1[2]);
console.log(name1.charAt(0));
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
let name2 = " Hello AshMoon ";
console.log(name2.trim()); //remove space of both front and back
console.log(name1.substr(0,3)); // result -> Ash

let text = "Hello World";

console.log(text.split(" ")); // ["Hello", "World"];
console.log(text.split(" ")[0]); // Hello
console.log(text.split(" ").length); // 2
console.log(text.split("")); // ['H', 'e', 'l', 'l',  'o', ' ', 'W', 'o',  'r', 'l', 'd']
console.log(text.split("").length); // 11
console.log(text.split("")[0]); // H


// The Combination of string's split and array's join 

const text1 = "This is a sample text";
const modifiedText = text1.split(" ").join("_");
console.log(modifiedText);

//reverse 
const originalWord = "Ashmoon Ashmoon";
console.log(originalWord.split(" "));
console.log(originalWord.split(""));
const reversedWord = originalWord.split("").reverse().join("");
console.log(originalWord.split("").reverse().join("|"));
console.log(reversedWord);
// I have no idea what i am doing :)))

//Formatting 

const rawData = "John Doe|25|Engineer";
const formattedData = rawData.split("|").join(" - ");
console.log(formattedData); // Arr ha! I get it now (●'◡'●)

// Regular Expression
//Search and Replace Method

String.prototype.greet = function() {
    return "Hello, World"
}

let str = "Some String";
console.log(str.greet()); // dangerous if you don't know well the impact of this .(idk too :))

console.log("--------------------------------- ");
console.log("--------------------------------- ");

// Object

// To creat object, there are two ways as Array.
// Object literal

let cat = {
    color: "Yellow",
    name: "Thel Thel",
    legs: 4, // you can add or not comma(,) in last , it can save your time when you accidentally added new values but you forgot to add comma.
 };

 //can use both way to use object
 
 console.log(cat.legs);
 console.log(cat["color"]);

 let bird = {
    color: "Green",
    legs: 2,
 }

 bird.name = "Shwe Gal";
 bird["color"] = "Blue";

 console.log(bird);

 // object spread and destructuring

 let user = { name: "Ash", age: 20};

 function greet1({name, age}) {
    return `Hello ${name}, you are ${age} years old`;
 }

 console.log(greet1(user));

 let {name , age} = user

 console.log(greet1(user));
 console.log(user);

 console.log("--------------------------------- ");

 let user1 = {
    name: "Ashmoon",
    hello: function() {
        return `Hello, I'm ${this.name}`;
    }
 }

 console.log(user1.name); // Ashmoon
 user1.name = "Nyein"; 
 console.log(user1.hello()); // Hello, I'm Nyein

user1 = {
    name: "Ashmoon",
    hello() {
        return `Hello, I'm ${this.name}` // Use 'this' keyword when you use object property and method
    }
}

let name3 = "Moon";
let age1 = 22;

let user2 = {
    name4: name3,
    age2: age1,
}

//short form
// name3 = "Moon";
// age1 = 22;
// user2 = {name3, age1};

console.log(user2.name4);
console.log(user2.age2);

console.log("--------------------------------- ");

let person = {
    name: "La La",
    age: 22,
    education: [
        "B.Sc.",
        "MBA",
    ]
}
console.log(person.education);

 console.log("--------------------------------- ");

 let people = [
    { name: "Alice", age: 21, gender: "Female"},
    { name: "Bob", age: 22, gender: "Male"},
    { name: "Zack", age: 24, gender: "Male"},
 ]

 console.log(people);
 console.log(people[0]);
 console.log(people[1].name);
 console.log(people[2].gender);

 let nameOnly = people.map(p => p.name);
 console.log(nameOnly);

 let maleOnly = people.filter( p => p.gender === "Male");
 console.log(maleOnly);

 // just figure out yourself stupid dumbb.
 let averageAge = people.reduce( ( sum, p) => 
    sum + p.age, 0) / people.length;

 console.log(averageAge);

  console.log("--------------------------------- ");

  // JSON , JavaScript Object Notation

  //Change JavaScript Object to JSON String

  let Person = { name: "Ashmoon", age: 21 };
  JSON.stringify(Person);
  console.log(JSON.stringify(Person));

  console.log("--------------------------------- ");

  //Change JSON String to JavaScript Object

  let json = ' { "name": "Ashmoon", "age" : 21 } '
  JSON.parse(json);
  console.log(JSON.parse(json));

  console.log("--------------------------------- ");



