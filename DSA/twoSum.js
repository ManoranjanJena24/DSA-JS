// Q4) Two sum
// Givenan array of integers nums and an integer target,
//reurn indices of two numbers such that they add up to target

// Input : nums=[2,7,11,15], target=9
// Output: [0,1] (Because nums[0]+nums[1]==9)

//Input:nums=[3,2,4, target=6]
//Output :[1,2]


//Brute Force approach

// const twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target)
//                 return [i, j];
//         }
//     }
// };

// console.log(twoSum([1, 1, 2, 34], 3))

//Using JS Objects

// const twoSum = function name(nums, target) {
//     var obj = {};
//     for (let i = 0; i < nums.length; i++) {
//         var n = nums[i];

//         if (obj[target - n] >= 0) {
//             return [obj[target - n], i]
//         }
//         else {
//             obj[n] = i;
//         }
//     }

// }

// console.log(twoSum([2, 7, 11, 15], 26))


function test(arr, K) {
    let result = []
    // result []
    // result={
    //     10:0,
    //     -1:1,
    // }
    console.log(result)

    for (let i = 0; i < arr.length; i++) { //i=1
        const current = arr[i]; //current = -1
        if (result[K - current] !== undefined) //result[3-(-1) =4] = undefined 
        {
            return [result[K - current], i]
        }
        result[current] = i;  //result[-1]=1
    }
    return [];
}

let arr = [10, -1, 2, -3, 1];
// positions 0   1  2   3  4
let K = 3;
console.log(test(arr, K))