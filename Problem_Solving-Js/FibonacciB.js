// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.

function fibonacciIterative(num){
    let fibo = [0, 1];
    for (i = 2; i <= num; i++){
        var nextFibo = fibo[i-1] + fibo[i-2];
        fibo.push(nextFibo);
        
    }
    return fibo;
}
var result = fibonacciIterative(10);
console.log(result);

function fibonacciRecursive(num){
    // stoping condition
    if(num == 0){
        return [1];
    }
    if(num == 1){
        return [1, 1];
    }
    // recursive call 
    let fibo = fibonacciRecursive(num - 1);
    let nextFibo = fibo[num - 1] + fibo[num - 2];
    fibo.push(nextFibo);
    return fibo;
}
let result1 = fibonacciRecursive(10);
console.log(result1);