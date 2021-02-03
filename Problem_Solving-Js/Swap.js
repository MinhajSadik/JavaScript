//Frist Problem Solve
let a = 5;
let b = 7;
// console.log("before swap: a=", a, "b =", b);
let temp = a;
a = b;
b = temp;
// console.log("after swap: a=", a, "b =", b);

//Second Problem Solve
let x = 5;
let y = 7;
x = x+y;
y = x-y;
x = x-y;
console.log('after swap: p=', x , 'y=', y);

//Third Problem Solve
let p = 5;
let q = 7;
[p,q] = [q,p];
// console.log('after swap: p=', p, ',  q=', q);