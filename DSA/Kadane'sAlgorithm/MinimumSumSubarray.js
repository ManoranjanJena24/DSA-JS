// Q)Given an integer array nums ,find the subarray with largest sum,
// and return its sum.
// Input:[-2,1,-3,4,-1,2,1,-5,4]  --->O/P 6, [4,-1,2,1]
// Input:[3,4,-1,7,8]  --->O/P 23, [5,4,-1,7,8]

let startIdx = 0;
let endIdx = 0;
function maxSubArray(nums) {
    let maxSum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {
            currentSum = currentSum + nums[j];
            if (currentSum > maxSum) {
                maxSum = currentSum;
                startIdx = i;
                endIdx = j;
            }

        }

    }
    return {
        sum: maxSum,
        subArray: nums.slice(startIdx, endIdx + 1)
    }
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))


// ---------------------------------------------------------

// Kadane Algorithm 
function maxSubArray1(nums) {
    let sum = 0;
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > max) {
            max = sum
        }
        if (sum < 0) {
            sum = 0;
        }

    }
    return max;

}

console.log(maxSubArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4]))