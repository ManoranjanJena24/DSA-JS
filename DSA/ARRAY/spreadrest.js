// Spread and Rest Operators
const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

const finalNums = [...nums, ...nums2]; //Spread Operator

function sum(...numbers) {   //Rest Operator
    return numbers;
}

console.log(sum(nums, nums2, 5, "hello"));
