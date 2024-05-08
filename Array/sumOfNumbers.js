function sumOfNumbers(Array){
    let sum = 0;
    for(let k of Array){
        if(isNumber(k)){
            sum += k;
        }
    }
    return sum;
}

function isNumber(element){
    if(typeof(element) === "number"){
        return true;
    }
    return false;
}

console.log(sumOfNumbers([2, "11", 3, "a2", false, 5, 7, 1]));