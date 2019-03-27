//Given a sorted array A (sorted in ascending order), having N integers, find if there exists any pair of elements (A[i], A[j]) such that their sum is equal to X.

function multiPointer(arr, x){
        let left = 0;
        let right = arr.length - 1;
        while(left < right) {
            let sum = arr[left] + arr[right];
             console.log(right);
             if(sum === x)  {
                 return [arr[left], arr[right]];
             } else if(sum > x) {
                 right--;
             } else {
                 left++;
             }
        }
}

multiPointer([10, 20, 35, 50, 75, 80], 70);