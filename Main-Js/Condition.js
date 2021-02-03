
let jobPaise = true;
let savingAmount = 20000;

if(jobPaise == true && savingAmount <= 20000) {
    console.log("Ok Ami Biye Kore Nebo");

}
 else if(jobPaise == true){
    console.log("Tahole O Ami Biye Kore Nebo");

}
else{
    console.log("Tahole Amar A Jibon A Biye Kora Hobe Na");

}







var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i = 0; i < students.length; i++) {
    Avgmarks += students[i][1];
    var avg = (Avgmarks / students.length);
}

console.log("Average grade: " + (Avgmarks) / students.length);

if (avg < 60) {
    console.log("Grade : F");
}
else if (avg < 70) {
    console.log("Grade : D");
}
else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}


