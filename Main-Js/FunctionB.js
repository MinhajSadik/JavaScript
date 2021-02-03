// for (var i = 0; i <marks.length; i++){
//     var element = marks[i];
//     console.log(element);
// }
// console.log('Outside');
// console.log('tooOutside');


// function add(number1, number2,){
//     var total = number1 +number2;
//     return total;
// }
// var result1 = add(65,89);
// console.log(result1);
// var adam = "adam uddin";
// var kdam = "kdam uddin";
// console.log('Not adding this time');
// console.log('Nothing To Height?');
// var result2 = add(144,583);
// console.log(result2);
var marks = [89, 97, 79, 88, 94, 92,];//function condition loop using one variable 
function largestNumber(number){
    var larger = numbers[0];
    for(var i = 0; i< number.length; i++){
        var element = number[i];
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}
var numbers = [83,32,34,94,43,43,31,52,];
var output = largestNumber(numbers);
console.log ('output', output);

