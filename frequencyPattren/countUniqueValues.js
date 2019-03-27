function countUniqueValues(arr) {
    let testObj = {};
    for(let i = 0; i < arr.length; i++) {
        const key = arr[i];
        testObj[key] = testObj[key] ? testObj[key] += 1 : 1;
        console.log(testObj);
    }
    if(testObj && Object.keys(testObj).length > 0) {
        console.log("Number of uniques elements in given array is: ", Object.keys(testObj).length);
    } else {
        console.log("No Unique elements: ");
    }

}

//countUniqueValues([1, 2, 3 ,4 ,4, 4, 7, 7, 12, 12, 13]);
//countUniqueValues([]);
