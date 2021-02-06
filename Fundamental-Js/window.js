var name = 'kuddus';
function add(num1, num2){
    result = num1 + num2;
    console.log('name', result);
    function double(num){
        return num * 2;
    }
    var total = double(result);
    return total;

}
console.log('name', name);
// console.log('result', result);
var sum = add(13,31);
console.log(sum);
console.log(result);