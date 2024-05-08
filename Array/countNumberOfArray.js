function test(array){
    new_array = array.filter(n => Array.isArray(n));
    console.log('The Newly Filtered Array is==========>>',new_array);
    return new_array.length;
}

console.log('The Total number of available Array is ==========>>',test([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]]));