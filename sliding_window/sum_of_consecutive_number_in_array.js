function sum_of_consecutive_number(arr, num){
    if(arr.length === 0) {
        console.log("Empty Array");
    }
    let max = 0;
    for(let i=0; i<num; i++) {
        max = arr[i] + max;
    }
    let tempSum = max;
    for(let j=num; j<arr.length; j++) {
         tempSum = tempSum + arr[j] - arr[j-num];
         max = Math.max(tempSum, max);
    }
    console.log("Max of consecutive numbers is ", max);
}

sum_of_consecutive_number([5, 3, 4, 1, 6, 2, 2, 4, 3, 1, 5], 3)
