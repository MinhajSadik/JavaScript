const normalPerson ={
    firstName: 'Minhaj',
    lastName: 'Sadik',
    salary:14000,
    getFullName: function() {
        console.log(this.firstName, this.lastName);

    },
    chargeBill:function(amount, tax, tips) {
        this.salary = this.salary - amount - tax - tips;
        return this.salary;

    }
}

normalPerson.chargeBill(11000);
normalPerson.chargeBill(300);
console.log(normalPerson.salary);

const heroPerson ={
    firstName: 'Jahid',
    lastName: 'khan',
    salary: 24000,

}

const friendlyPerson = {
    firstName: 'sadat',
    lastName: 'Hussain',
    salary: 30000,
}

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(1400);

normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
normalPerson.chargeBill.call(heroPerson, 3000, 300,30);
console.log(heroPerson)

normalPerson.chargeBill.call(friendlyPerson, 3000, 300, 30);
console.log(friendlyPerson)


normalPerson.chargeBill.apply(heroPerson,[2000, 200, 20]);
normalPerson.chargeBill.apply(friendlyPerson,[2000, 200, 20]);
console.log(friendlyPerson);


