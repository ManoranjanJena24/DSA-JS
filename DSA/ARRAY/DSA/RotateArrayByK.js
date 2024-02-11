// Q2) Rotate Array by K
// Given an integer array nums,rotate the array to the right by k steps,
// where k is non-negative

// Input: nums=[1,2,3,4,5,6,7], k=3   ------->>>>   Output: [5,6,7,1,2,3,4]
// Input: nums=[-1,-100,3,99], k=2  ------->>>>   Output: [3,99,-1,-100]

// Explanation:-
// [1,2,3,4,5,6,7] =>[7,1,2,3,4,5,6] =>[6,7,1,2,3,4,5]=>[5,6,7,1,2,3,4]

function rotateArray(nums, k) {
    let size = nums.length;
    if (k > size) {
        k = k % size;
    }

    const rotated = nums.splice(size - k, size); //[5,6,7]
    nums.unshift(...rotated);
    return nums;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3))

// -----------------------------------------------------------------

function rotateArrayOptimised(nums, k) {
    let size = nums.length;
    if (k > size) {
        k = k % size;
    }
    //[1, 2, 3, 4, 5, 6, 7]=>[7,6,5,4,3,2,1]=>[5,6,7,4,3,2,1]
    // step1:reverse array
    // step 2: reverse only k which is 3 in this case
    // step3:reverse the remaining elements
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)

    return nums;
}
// nums array
// left pointer and right pointer
function reverse(nums, left, right) {
    while (left < right) {
        const temp = nums[left];
        nums[left++] = nums[right]
        nums[right--] = temp
    }
}

console.log(rotateArrayOptimised([1, 2, 3, 4, 5, 6, 7], 3))