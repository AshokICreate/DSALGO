function isArraySame(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        console.log("Both Array Length Need To Be Same");
    }
    else {
        let fre1 = {}, fre2 = {};
         for(let val of arr1){
             fre1[val] = (fre1[val] || 0) + 1;
         }
         for(let val of arr2){
             fre2[val] = (fre2[val] || 0) + 1;
         }
          console.log(fre1);
          console.log(fre2);
          let isArraySame = true;
          for(key in fre1) {
            if(fre2.hasOwnProperty(key **2)){
               if(fre1[key] === fre2[key * key]){
                   
               } else{
                   isArraySame = false;
                   break;
               }
            } else{
                isArraySame = false;
                break;
            }
        }
        return isArraySame;
    }
}

isArraySame([1, 2, 3, 4, 4, 5], [16, 4, 9, 1, 16, 25]) ? console.log("SAME") : console.log("NO");