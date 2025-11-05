function add10000() {
    let result = 0;
    for( let i = 0; i < 1000000000; i++) {
        result += i;
    }
    return result;
}

// function add1000later() {
//     return new Promise( done => {
//         done (add1000());
//     });
// }

// function add10000later() {
//     return new Promise((resolve, reject) => {
//         result = add10000();
//         if(result) resolve(result);
//         else reject();
//     })
// }

// console.log("Some processes!");
// add10000later()
// .then( result => result +1000 )
// .then( result => console.log(result))
// .catch( () => console.log("Error! In your stupid codebase!! Check it and debug it stupid!!"))
// console.log("Some processes..");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");


async function add10000later() {
    let result = await add10000()
    console.log(result)
}

console.log("some processes")
add10000later();
console.log("more processes")