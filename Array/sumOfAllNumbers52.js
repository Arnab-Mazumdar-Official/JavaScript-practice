function sunOfAllNumbers(array) {
    try {
        let sumOfNumbers = 0;
        if(Array.isArray(array)){
            array.map((val) => {
                if(typeof(val) === 'number'){
                    sumOfNumbers += val
                }
            })
            return console.log(sumOfNumbers);
        }else throw new Error("This is Not a Array!!......")
    } catch (error) {
        console.log("Error--------->>", error);
    }
}

sunOfAllNumbers([2, "11", 3, "a2", false, 5, 7, 1]);