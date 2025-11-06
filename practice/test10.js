// async , await
// async function fetchNumber() {
//     return await new Promise(resolve => setTimeout(() => resolve(42),1)) * 22;
// }

// fetchNumber().then(result => console.log('Result: ',result));

// promise
// const delay = ms => new Promise((resolve) => setTimeout(() => resolve(ms), ms));

// delay(500).then(value => {
//     console.log('Resolved after',value, 'ms');
//     return delay(300);
// }).then(() => {
//     console.log('Then after 300ms');
// }).catch(err => console.log('Error:', err));

// callback 
function readData(cb){
    setTimeout(() => {
        const err = null;
        const data = {name: 'Naruto'};
        cb(err, data);
    }, 500);
}

readData((err, data) => {
    if(err) return console.error('Error:', err);
    console.log('Got data:', data);
});