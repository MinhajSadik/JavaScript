   //Iterative Way To Fibonacci
// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[4] = fibo[4-1] + fibo[4-2];
// fibo[5] = fibo[5-1] + fibo[5-2];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fibo[i] = fibo[i-1] + fibo[i-2];

    //Using Loop Fibonacci.
// let fibo=[0,1];
// for (let i = 2; i <=12; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
//     //console.log(fibo[i], fibo[i-1], fibo[i-2]);
// }
// console.log(fibo);

    //Using Function Fibonacci
function fibonacci(n){
    let fibo = [0,1];
    for(let i =2; i <=n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
let result = fibonacci(12);
console.log(result);