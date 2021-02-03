function explain_callback(name, age, task){
    console.log('hello', name);
    console.log('age', age);
    task();
}

function washHand(){
    console.log('wash hand with soap');

}
function scrollFacebook(){
    console.log('scroll facebook');
        
    }


function takeShower(){
    console.log('take shower');

}
// call back function

explain_callback('Minhaj Uddin', 23, washHand);
explain_callback('Sadik Uddin',24, takeShower);
explain_callback('Minhaj Sadik', 22, scrollFacebook);
