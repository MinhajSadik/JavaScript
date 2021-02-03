let marks = [32,90,93,32,90,93,23,94,99];
let max = marks[0];
for(let i = 0; i<marks.length; i++){
    let element = marks[i];
    if(element>max){
        max = element;
    }
}
console.log("Heights Vlaue Is: ",max);