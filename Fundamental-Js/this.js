const myObj = {
    name: 'salman ali',
    getFullName: function () {
        console.log(this);
        return 'Mr. ' + this.name;
    }
}
myObj.getFullName();
const anotherObj = {
    name: 'kalman ali'

}
anotherObj.getFullName = myObj.getFullName;
console.log(anotherObj.getFullName);

myObj.getFullName();
anotherObj.getFullName(); 


function add(a, b) {
    console.log(this);
    return a + b;

}
add(23, 32);

anotherObj.sum = add;
anotherObj.sum();

setTimeout( function() {
    console.log(this);
}, 1000 );
