//By Me
function inserstion_sort(arr) {
  let count = 0;
  for(let i = 1; i < arr.length; i++) {
      for(let j = i; j > 0 && arr[j] < arr[j-1]; j--) {
          count++;
          if(arr[j] < arr[j-1]) {
              let temp = arr[j];
              arr[j] = arr[j-1];
              arr[j-1] = temp;
          }
      }
  }
  console.log(arr, count);
}

inserstion_sort([7, 8, 5, 2, 4, 6, 3, 33, 0, 4, 2, 2694, 302]);

//By Author
function insertionSort(arr){
	var currentVal;
	let count = 0;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            count++;
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    console.log(arr, count);
}


insertionSort([7, 8, 5, 2, 4, 6, 3, 33, 0, 4, 2, 2694, 302]);

//Output:
// [0, 2, 2, 3, 4, 4, 5, 6, 7, 8, 33, 302, 2694] 37 //37 indiactes total number of iterations.
// [0, 2, 2, 3, 4, 4, 5, 6, 7, 8, 33, 302, 2694] 37 //37 indiactes total number of iterations.
