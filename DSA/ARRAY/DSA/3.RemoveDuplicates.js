// Q)Remove Duplicates from Sorted Array
// Input:[1,1,2]  ---->>  O/P: 2,[1,2]
// Input:[0,0,1,1,1,2,2,3,3,4]  ---->>  O/P: 5,[0,1,2,3,4,_,_,_,_,_]

function removeDuplicates(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1);
            i--;
        }
    }
    return nums.length;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))


// -----------------------------------------------------------------------------------

// Without JS Methods

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))