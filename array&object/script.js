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

// In reduce method , there are two parameters! 'a' is accumulative value , value is 'null' in initial then 'n' is current value from array.
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