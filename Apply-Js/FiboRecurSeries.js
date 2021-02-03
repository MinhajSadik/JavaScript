// Calculate Fibo Series With Functions 
//[0,1,1,2,3,5,8,13,21,];
    function fibonacci(n) {

    if (n == 0){
        return [0];
    }
    else if (n == 1){
        return [0,1];
    }
    else{
        //calculate array n-th element
        let fibo = fibonacci(n-1);
        let nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}
let result = fibonacci(15);
console.log(result); 