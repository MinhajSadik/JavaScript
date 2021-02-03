var student = { 
    id:131,
    phone:1712,
    name:"minhaj",

}
var student2 = {
    name:"sadik",
    id:141,
    phone:1712,
}
// chack this phone number type
var phonePropName = "phone";
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo3 = student[phonePropName];

// update phone number.
student.phone = 22222333;
student2["phone"] = 2233432;
console.log(student);
console.log(student2);