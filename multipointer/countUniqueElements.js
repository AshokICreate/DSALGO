//Using multipointer.
//Note original array is Modified here.
function countUniqueValues(arr) {
    if(arr && arr.length === 0) {
        console.log("Empty array");
    } else {
    let i = 0;
    for(let j = 1; j < arr.length; j++)  {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    console.log("total numbers of unique elements in given array is", i + 1);
    console.log("Modified array", arr);
    }
}

countUniqueValues([1, 1, 2, 2, 3, 3, 3, 3, 4, 5, 6, 6, 7]);
