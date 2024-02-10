const flatEx = [1, [2, 3], [4, 5], 6]

const flattenedArray = flatEx.flat();
console.log(flattenedArray)


// ---------------------------------- ------------------------------

const flatEx1 = [1, [2, 3], [[1, 2, 3], 5], 6]
const flattenedArray2 = flatEx1.flat(2);
console.log(flattenedArray2)
const flattenedArray1 = flatEx1.flat(2);
console.log(flattenedArray1)