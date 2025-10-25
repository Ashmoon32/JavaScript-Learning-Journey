const math = require('./math');

console.log(math.PI);
console.log(math.add(1, 2));
console.log(math.div(1, 2));

const { PI, add } = require("./math");

console.log(add(1, 2));
