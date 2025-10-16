 let total = 0;

function sumToN(n){
    for(let i = 1; i <= n; i++){
         total += i;
    }
     return total;
  
}

console.log(sumToN(5));