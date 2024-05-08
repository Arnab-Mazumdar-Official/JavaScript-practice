function thirdSmallestNumber(Arr){
   try{
    if(Array.isArray(Arr)){
        return Arr.sort()[2];
    }
    else throw  `Input Proper Array!!.....`
   }catch(error){
    console.log("Error========>>",error);
   }
}

console.log(thirdSmallestNumber([2,3,0,5,7,8,-2,-4]));