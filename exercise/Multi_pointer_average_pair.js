//Write a f(n) averagePair.
//Given a sorted array of intengers and a target value.
//Determine if there is a pair of values in the array where the average pair of equals the target average.
//There may be more than one pair that matches the average target.


function averagePair(arr, givenAverage){
        let isAveragePairPresent = false;
        if(arr.length === 0) {

        }

        let left = 0, right = arr.length - 1;
        while(left < right) {
                let average = (arr[left] + arr[right])/2;
                console.log(average);
                if(givenAverage === average) {
                      isAveragePairPresent = true;
                      break;
                } else if(average > givenAverage) {
                        right--;
                } else {
                        left++;
                }
        }
        return isAveragePairPresent;
}


averagePair([1, 3, 4, 5, 6, 7], 4.5);
