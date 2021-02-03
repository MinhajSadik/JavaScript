function evenify(num){
    let result;
    if (num % 2 == 0) {
        result = num;
    }
    else{
        result = num * 2;

    }
    return result;
}
let result = evenify(13);
let square = result * result;
console.log(square);

function evenIfy_all(nums) {
    let even_array = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        //let result1 = evenIfy(num);
        even_array.push(result);
    }
    return even_array;
}

let nums = [2, 30, 39, 49, 39, 32];
let nums_even = evenIfy_all(nums);
console.log(nums_even);

// friends_age = [12, 13, 14, 15, 16, 17, 18];
// evenIfy_all(friends_age);