// Ques 3- Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of different word or phrase,using all th orignal letters exactly once


//Input :(s="anagram"),(t="nagaram"); ------------>Output: true;

// Input:(s="rat"),(t="car")-->O/P: False

// 1st Approach
// const isAnagram1 = function (s, t) {
//     s = s.split("").sort().join("");
//     t = t.split("").sort().join("");
//     return s === t;
// }

// console.log(isAnagram1("anagram", "nagaram")); //true

// console.log(isAnagram1("cat", "dog"));//false



const isAnagram2 = function (s, t) {
    if (s.length !== t.length) return false;

    let obj1 = {};

    let obj2 = {};

    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }


    // for (const key in obj1) {
    //     if (obj1.key !== obj2.key) return false;
    // }
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }

    return true;

}



console.log(isAnagram2("anagram", "nagaram"));