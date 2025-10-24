let nums = [ 1, 12, 5, 4, 9, 5 ];

let result = nums.map( n => {
    if ( n === 5 ) n += 10;
    return n;
})

console.log(result); // result -> [ 1, 12, 15, 4, 9, 15 ]


let people = [
    { name: "Alex" },
    { name: "Bob", gender: "M" },
    { naem: "Tom", gender: "m" },
     { name: "Mary", gender: "F" },
];

// let result1 = people.map(function(person) {
//     if(person.gender) {
//         if(person.gender === "m" || person.gender === "M"){
//             person.gender = "Male";
//         }

//         if(person.gender === "f" || person.gender === "F"){
//             person.gender = "Female";
//         }
//     }else{
//         person.gender = "Unknown";
//     }
//     return person;
// });

// console.log(result1);

// // Switch

// console.log(people);

// people = [
//     { name: "Alex" },
//     { name: "Bob", gender: "M" },
//     { name: "Tom", gender: "m" },
//     { name: "Mary", gender: "F" },
// ]



let result4 = people.map(function(person) {
    // 1. Create a NEW object to avoid mutating the original 'person' object
    let newPerson = { ...person }; 
    
    // Convert gender to lowercase for easier comparison
    const gender = newPerson.gender ? newPerson.gender.toLowerCase() : undefined;

    switch(gender) {
        case "m":
            newPerson.gender = "Male";
            break;

        case "f":
            newPerson.gender = "Female";
            break;

        // Handles all other cases: undefined (Alex), null, or any other string
        default:
            newPerson.gender = "Unknown";
    }

    // 2. Return the new object for the 'result4' array
    return newPerson;
});

console.log('Original Array (people):', people);
console.log('New Array (result4):', result4);


//Ternary Operator
let user = { name: "Bob", age: 17 };
let status = user.age >= 18 ? "Authorized" : "Unauthorized";
console.log(status);

let count = 0;

// while loop
while(count < 3) {
    console.log(count);
    count++;
}


console.log("------------------------------");

console.log(count);

console.log("------------------------------");

count = 0; // reassign bec count becomes 
//do while loop
do{
    console.log(count);
    count++;
}while(count < 3);


console.log("------------------------------");


let count1 = 5;

do{
    console.log(count1);
    count1++;
}while(count < 3);

console.log("------------------------------");

//for loop

for(let i = 0; i < 3; i++) {
    console.log(i);
}

// continue and break

let num7 = [ 11, 22, -1, 44];

for(let i = 0; i < num7.length; i++) {
    if(num7[i] < 0) break; // break when this condition is true
    console.log(num7[i]);
}

for(let i = 0; i < num7.length; i++) {
    if(num7[i] < 0) continue; //skip when this condition is true
    console.log(num7[i]);
}

// for in loop

let user3 = { name: "Bob", age: 22, gender: "Male" }

for( p in user3) {
    console.log(`${p} is ${user3[p]}`);
}

// for of loop

let users = ["Alice", "Bob", "Tom", "Mary"];

for( u of users) {
    console.log(u);
}