let obj1 = {};
let obj2 = {};
let s = 'aabci';
let j = 'abaca';
function anagram(s, j) {
    if (s.length !== j.length) return false;
    for (let i = 0; i < s.length; i++) {

        // obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        // obj2[j[i]] = (obj2[j[i]] || 0) + 1;
        console.log(obj2[j[i]] = (obj2[j[i]] || 0) + 1);

        // console.log(obj1.key);
    }

    console.log(obj2);
    // console.log(obj1);
    //obj1=a=2,b=1,c=1 
    //obj2=a=2,b=1,d=1 
    // for (const key in obj1) {
    //     if (obj1[key] !== obj2[key])
    //         return false
    // }
    // return true;

}


anagram(s, j);

// console.log(anagram(s, j));