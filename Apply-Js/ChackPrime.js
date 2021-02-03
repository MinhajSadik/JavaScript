function isPrime(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
            return "It's Not A Prime Number";
        }
    }
    return "It's A prime Number";
}
let result = isPrime(17);
console.log(result);

// prime numbers chack