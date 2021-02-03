// let numbers = [33,32,42,32,23,111,42,42];
// let sum = 0;

// for(let i = 0; i < numbers.length; i++){
//     let element = numbers[i];
//     sum = sum + element;
// }
// console.log('Total Of The Numbers:',  sum);

function getArraySum(number){
    let sum = 0;
    for( let i = 0; i < number.length; i++){
        let element = number[i];
        sum = sum + element;
    }
    return sum;
}
let number = [32,23,32,42,12,21,31,31];

let result = getArraySum(number);
console.log('total of the numbers: ', result);

let total = getArraySum([32,32,23,32,42,42]);
console.log('total of the numbers:', total);

