function checkFactor(array) {
    try {
        if (Array.isArray(array)) {
            for (k=0 ; k< array.length -1;k++) {
                console.log("array[k]---->>",array[k],"array[k+1]------>>",array[k+1]);
                if (array[(k + 1)] % array[k] != 0) {
                    return console.log("Factors not matched ")
                    break;
                }
            }
            return console.log("Factors  matched ")
        }
        else throw new Error("This is not a array")
    } catch (error) {
        console.log("Error===========>>", error);
    }
}

checkFactor([2, 4, 16, 32, 64])