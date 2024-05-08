function chechPrime(n){
    if(n == 1 || (n > 2 && n % 2 == 0))
    {
        return false;
    }
    else{
        return true;
    }
}

function checkPrimeInArray(Arr){
    try{
        let check = true
        if(Array.isArray(Arr)){
            for(let key of Arr){
                check = chechPrime(key);
                if(check == false){
                    break;
                }
            }
        }
        return check;
    }catch(error){
        console.log('Error==>>',error);
    }
}

let Arr1 = [2,3,5,7,8];
console.log(checkPrimeInArray(Arr1));