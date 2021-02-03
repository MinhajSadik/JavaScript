// // 5! = 1*2*3*4*5*
// //iterative way 
// function factorial(num){
//     let fact = 1;
//     for(let i = 1; i <= num; i++){
//         fact=fact*i;

//     }
//     return fact;
// }
// var result = factorial(5);
// console.log('result', result);

//Recursive Way

function factorialRecursive(num){
    if (num == 1){
        
        return 1;
    }
    else{
        console.log (num, num-1);
        return num * factorialRecursive(num-1);
    }
}


