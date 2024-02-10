// Q) Second Largest Number
// Given an array Arr of size N, print second largest
// distinct eleement from an array.//for this we will use set to get unique elements

// Input:[12,35,1,10,34,1]     --------------->>>Output 34
//Input:[10,5,10]        -------------->Output:5

//[12,35,1,10,34,1,35] => [1,1,10,12,34,35,35]

function secondLargest(arr) {
    const uniqueArr = Array.from(new Set(arr));// O(n)
    console.log(uniqueArr)

    uniqueArr.sort((a, b) => {      //O(nlogn)
        return b - a;
    })
    if (uniqueArr.length >= 2) {
        return uniqueArr[1]
    }
    else {
        return -1;
    }
}

console.log(secondLargest([12, 35, 1, 10, 34, 1, 35]))
// secondLargest([12, 35, 1, 10, 34, 1, 35])
//step1:Make it a set
// step2:Convert it into Array
// So when you get an object it converts into array



// Optimized < Approach

function secondLargestOptimized(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] != largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }

    }
    return secondLargest;
}
console.log(secondLargestOptimized([12, 35, 1, 10, 34, 1, 50, 100]))

// Time Complexity -> O(n)
// Space Complexity ->O(1)