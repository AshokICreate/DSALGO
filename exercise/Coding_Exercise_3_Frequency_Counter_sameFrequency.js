function sameFrequency(num1,  num2){
        let arr1 = num1.toString().split('');
        let arr2 = num2.toString().split('');
        if(arr1.length !== arr2.length) {
            return false;
        } else {
            let json1= {}, json2 = {};
            for(let i = 0; i <arr1.length; i++) {
                json1[arr1[i]] = json1[arr1[i]] ? json1[arr1[i]] + 1 : 1;
                json2[arr2[i]] = json2[arr2[i]] ? json2[arr2[i]] + 1 : 1;
            }
            let isSameFrequency = true;
            for(let key in json1) {
                if(key in json2) {
                    if(json1[key] !== json2[key]) {
                        isSameFrequency = false;
                        break;
                    }
                } else {
                     isSameFrequency = false;
                     break;
                }
            }
            return isSameFrequency;
        }
}

sameFrequency(123456, 654321); //true
sameFrequency(232323, 323232); //true
sameFrequency(9891, 9892); //false
sameFrequency(123, 12); //false
