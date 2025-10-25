// JavaScript is Single-Thread 
// Message Queue, Frame Stack, Event Loop

console.log(1);
console.log(2);
setTimeout( () => console.log(3), 1000);
console.log(4);

// Callback , Promise

function add1000 () {
    let result = 0;

    for( let i = 1; i <= 1000; i++) {
        result += i;
    }

    return result;
}

console.log("some process");
console.log(add1000());
console.log("more process");

console.log("---------------------------------------");

// function add1000later() {
//     return new Promise( done => {
//         done ( add1000() )
//     });
// }

// Promise

function add1000later() {
    return new Promise( (resolve, reject) => {
        let result = add1000()

        if(result) resolve(result)
            else reject()
    })
}
console.log("some process");
add1000later().then(result => console.log(result) );
console.log("more processes");

console.log("---------------------------------------");

add1000later() 
    .then( result => console.log(result) )
    .catch( () => console.log("Error") )

add1000later() 
.then( result => result + 1000 )
.then( result => console.log(result) )
.catch( () => console.log("Error") )

// async, await

async function add1000later() {
    let result = await add1000()
    console.log(result)
}

console.log("some processes");
add1000later();
console.log("more processes");