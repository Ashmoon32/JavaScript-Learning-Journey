// // Asynchronous
// console.log("Start...");

// setTimeout( () => {
//     console.log("Waiting 2 seconds...")
// }, 2000);

// console.log("End...");

// // Callback
// function greet(name, callback) {
//     console.log(`Hello I am ${name}!`);
//     callback();
// }

// function afterGreeting() {
//     console.log("Nice to meet you!");
// }

// console.log(greet("Ashmoon", afterGreeting));

// let promise = new Promise((resolve, reject) => {
//  let success = true;

//  if(success) resolve("Task complete!");
//     else reject("Something went wrong!");
// });

// promise.then(heelo    => console.log(heelo))
// .catch(error => console.log(error));


async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
}

getUsers();