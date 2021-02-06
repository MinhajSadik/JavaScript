class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;

    }
}
const heroPerson = new Person('hero', 'belain', 20000);
console.log(heroPerson);
const friendlyPerson = new Person('hero', 'kalaimma', 25000);
console.log(friendlyPerson);


function Person1(fistName, lastName, salary){
    this.fistName = fistName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new Person1('devid', 'malan', 300000);
console.log(oldPerson);