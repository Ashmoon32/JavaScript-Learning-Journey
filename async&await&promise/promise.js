function wait(ms) {
    return new Promise((resolve, reject) => {
        if (ms < 0) return reject(new Error("ms must be >= 0"));
        setTimeout(() => resolve(`waited ${ms}ms`), ms);
    });
}


wait(-1).then(result => {
    console.log(result);
}).catch(err => {
    console.log("Error:", err.message);
});
// then handles success, catch handles errors.