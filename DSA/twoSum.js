// Q4) Two sum
// Givenan array of integers nums and an integer target,
//reurn indices of two numbers such that they add up to target

// Input : nums=[2,7,11,15], target=9
// Output: [0,1] (Because nums[0]+nums[1]==9)

//Input:nums=[3,2,4, target=6]
//Output :[1,2]


//Brute Force approach

const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target)
                return [i, j];
        }
    }
};

console.log(twoSum([1,1,2,34],3))