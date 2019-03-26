function isAnagram(arr1, arr2) {
    if(arr1.length !== arr2.length){
        console.log("Invalid input");
    }
    else {
        let obj1 = {}, obj2 = {};
        for(i = 0; i<arr1.length; i++){
            obj1[arr1[i]] = obj1[arr1[i]] ? obj1[arr1[i]] += 1 : 1;
        }
        for(i = 0; i<arr2.length; i++){
            let letter = arr2[i];
            if(obj1[letter]) {
                console.log(obj1);
                obj1[letter] -= 1;
            } else {
                return false;
            }
        }
    }
}

isAnagram('anagram', 'nagrama');

//EXample 1:
/*
{a: 3, n: 1, g: 1, r: 1, m: 1}
{a: 3, n: 0, g: 1, r: 1, m: 1}
{a: 2, n: 0, g: 1, r: 1, m: 1}
{a: 2, n: 0, g: 0, r: 1, m: 1}
{a: 2, n: 0, g: 0, r: 0, m: 1}
{a: 1, n: 0, g: 0, r: 0, m: 1}
{a: 1, n: 0, g: 0, r: 0, m: 0}
*/