let friendsAge =[20,30,29,20,30,];
let ami = {
    age:18,
    weight:294,
    height:20,
    color:'blue'

}
let lookingFor = 'age';
let myAge = ami[lookingFor];
ami.weight = 89;
ami[lookingFor] = 24;
console.log(ami);
