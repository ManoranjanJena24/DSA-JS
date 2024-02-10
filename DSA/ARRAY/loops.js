//Looping an Array

let arr = ["apple", "banana", "person"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}


// --------------------------------------------------------------


// Inbuilt Loop Methods

const numbers = [1, 2, 3, 4, 5];
numbers.map((item, index, array) => {
    console.log(item, index, array);
})

// ------------------------------------------------------------------
// Filter works the same as map the only difference is it takes conditon inside this 
//only return those which satisfy that conditions 

const numbers1 = [1, 2, 3, 4, 5];
const newNums = numbers1.filter((item, index, array) => {
    return item > 3;
})
console.log(newNums)

// -----------------------------------------------------------------
// Reduce takes 4 things
//reduce takes an array and reduce it to one value

const reducearray = [9, 8, 7, 6, 5];
const sum = reducearray.reduce((prevVal, currentVal) => {
    return prevVal + currentVal;
}, 10)
console.log(sum);
// console.log(reduce24)

// ---------------------------------------------------------------------------

// findIndex
const nums = [20, 40, 60, 70];
const index = nums.findIndex((item) => {
    // Place your condition here
    return item === 60; // For example, find the index where the value is 60
});

console.log(index); // Output: 2
