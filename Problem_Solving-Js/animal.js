// using multiple condition to for any work.

let depth = 12;
let animal = 0;

if(depth<=10){
    animal = depth * 50;
}
else if(depth <= 20){
    var firstPart = 10 * 50;
    var remaining = depth - 10;
    var secondPart = remaining * 100;
    animal = firstPart + secondPart;
}
else{
    firstPart = 10 * 50;
    secondPart = 10 * 100;
    remaining = depth - 20;
    var thirdPart = remaining * 300;
    animal = firstPart +  secondPart + thirdPart;
}
console.log (animal);


//Same work using function!

function animalCalculator(depth){
    let animal = 0;

    if (depth <= 10) {
        animal = depth * 50;
    }
    else if (depth <= 20) {
        var firstPart = 10 * 50;
        var remaining = depth - 10;
        var secondPart = remaining * 100;
        animal = firstPart + secondPart;
    }
    else {
        firstPart = 10 * 50;
        secondPart = 10 * 100;
        remaining = depth - 20;
        var thirdPart = remaining * 300;
        animal = firstPart + secondPart + thirdPart;
    }
    return animal;
}
let count = animalCalculator(12);
console.log(count);
