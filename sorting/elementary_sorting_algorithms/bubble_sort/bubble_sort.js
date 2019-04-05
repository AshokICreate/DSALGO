//By Ashok
function bubble_sort(arr) {
    let count = 0;
    let noSwaps;
    for(let i =0; i < arr.length; i++) {
        noSwaps  = true;
        for(let j = 0; j < arr.length - 1 - i; j++) {
            count++;
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) {
            break
        }
    }
    console.log(`arr=${arr} and count=${count}`);
}

bubble_sort([77, 5, 1, 2, 66, 28, 44, 9]);

console.log("---------------------------------");

//By Author
function bubbleSort(arr){
  var noSwaps;
  let count = 0;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
       count ++;
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  console.log(`arr=${arr} and count=${count}`);
}

bubbleSort([77, 5, 1, 2, 66, 28, 44, 9]);

/*
Output:
arr=1,2,5,9,28,44,66,77 and count=25
bubble.js:24 ---------------------------------
bubble.js:42 arr=1,2,5,9,28,44,66,77 and count=25
*/
