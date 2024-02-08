// Q) Palindrome Number
// An integer is Palindrome when it reads the same from forward and backward

// Input x=121  -------------->>>>>> Output: true
// Input x=10   -------------->>>>>> Output:false

const isPalindrome = (x) => {
    return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}

const res = isPalindrome(121);
console.log(res);