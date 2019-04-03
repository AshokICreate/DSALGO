function binarySearch(arr, key) {
    let left = 0;
    let right = arr.length;
    let mid = parseInt(left + right / 2);
    let found = -1;
    while(left<right) {
        mid = parseInt(left + right / 2);
        if(key < arr[mid]) {
            right = mid;
        } else if(key > arr[mid]) {
            left = mid;
        } else if(key === arr[mid]){
          found = mid;
          break;
        }
    }
    return found;
}

const isFound = binarySearch([100, 201, 232, 333, 544, 665, 666, 777, 888, 999], 544);
if(isFound === -1) {
    console.log("Element not found:", isFound);
} else {
   console.log("Given element found at position", isFound);
}
