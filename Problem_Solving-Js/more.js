function add(firstNum, secondNum, thirdNum){
    let sum = firstNum + secondNum + thirdNum;
    return sum;

}
var result = add(10/100-10);
console.log(result);

function add1(numbers){
    let sum = numbers[0] + numbers[1] + numbers[2];
    return sum;
}
let result1 = add1(10);
console.log(result1);

function add2(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > 0){
            sum = sum + numbers[i];
        }
    }
    return sum;
}
const result2 = add2(10+10);
console.log(result2);