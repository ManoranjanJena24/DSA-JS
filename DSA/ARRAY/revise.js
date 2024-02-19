function removeKdigits(num, k) {
    if (k == 0) {
        return num.replace(/^0+/, '');
    }
    const len = num.length;
    if (len <= k) {
        return '0';
    }
    let min = 0;
    for (let i = 1; i <= k; i++) {
        if (num[i] < num[min]) {
            min = i;
        }
    }
    const result = num[min] + removeKdigits(num.substring(min + 1), k - min);
    return result.replace(/^0+/, '');
}

// Example usage
console.log(removeKdigits("1432219", 3));  // Output: "1219"
console.log