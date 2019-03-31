/*
write a recursive function called someRecusive which accepts an array and a callback.
the f(n) returns true if a single value in the array returns true when passed to callback. otherwise it returns false.

/*
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
*/

function someRecursive(arr, isOdd){
    console.log(arr);
   if(arr.length === 0){
       return false;
   }
   if(isOdd(arr[0])) {
       return true;
   }
   return someRecursive(arr.slice(1), isOdd)
}

someRecursive([1, 2, 3, 4], val => val % 2 !== 0);
