function reverseString(str){
    let reverse = "";
    for (let i = 0; i < str.length; i++){
        let char = str[i];
        reverse = char+reverse;

    }
    return reverse;
}
let statement = "hello alien and bai brother";
let forAlien = reverseString(statement);
console.log(forAlien);

let foodVlog = reverseString('anika');
console.log(foodVlog);