// const PI = 3.14;
// export default function add(a, b) {
//     return a + b;
// }

// const PI = 3.14;
// function add(a, b) {
//     return a + b;
// }

// export default add;

export const PI = 3.14;

export function add(a, b) {
    return a + b;
}

export function div(a, b) {
    if(b === 0) return "Cannot divided by zero";
    else return a / b;
}

// or u can export later like " export { PI, add, div }"