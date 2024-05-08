function findNaN(Array){
    find = [];

    for(let k in Array){
        if(isNaN(Array[k])){
            find.push(k);
        }
    }

    console.log(find);
}

findNaN([2, 4, NaN, 16, 32, NaN]);
