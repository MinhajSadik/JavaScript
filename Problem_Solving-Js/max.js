//Chack This Value Condition
let business = 800;
let minister = 300;
let sochib = 400;

if(business>minister){
    if(business>sochib){
        console.log('businessman is greater');
    }
    else{
        console.log('sochib is bigger');
    }
}
else{
    if(minister > sochib){
        console.log('minister is bigger');
    }
    else{
        console.log('sochib is bigger');
    }
}

//Chack This Value Math.max//
let max = Math.max(minister, sochib, business);
console.log(max);
//Chack This Value Math.min//
let min = Math.min(minister, sochib, business);
console.log(min);