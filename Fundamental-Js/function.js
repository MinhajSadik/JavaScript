
function evenIfy_all(numb){
    for (let i = 0; i < numb.length; i++) {
        const num = numb[i];
        if (num % 2 == 0) {
            console.log(num, ':is Even Number')
        }
        else {
            console.log(num * 2, ':is Odd Number')
        }
    }
}

let numb = [ 2, 30, 39, 49, 39, 32];
evenIfy_all(numb);

friends_age = [12, 13, 14, 15, 16, 17, 18];
evenIfy_all(friends_age);         