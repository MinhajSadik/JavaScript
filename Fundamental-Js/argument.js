// arguments and organization function
function addNumbers(num1, num2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum += num;
    }
    function logInfo(massage){
        console.log(massage);

    }
    logInfo('Good Morning');
    var dubble = sum * 2;

    return dubble;
}
var result = addNumbers(2,5, 9, 2, 32, 23,23);
console.log(result);