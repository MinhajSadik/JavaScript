let name =[2,4,3,1,3,1,1,13,3,4,4,2,4,2,11,];
let uniqueName = [];
for (let i = 0; i < name.length; i++) {
    let element = name[i];
    let index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);