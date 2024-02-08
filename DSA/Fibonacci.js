// Q) Fibonacci Number
// Fibonacci Series ->0,1,1,2,3,5,8,13,21,34,55,89,144,233,.......
// F(0)=0 , F(1)=1
// F(n)= F(n-1)+F(n-2),for n>1

//Input:n=3  ---------->Output =2

// const fib = (n) => {
//     const arr = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         arr.push(arr[i - 2] + arr[i - 1]);
//     }
//     console.log(arr);  //if wanna show all elements in fibonacci series
//     console.log(arr[n]);//if wannaa print only the output

//     // return arr[n];
// }

// console.log(fib(5));
// fib(5);

// ------------------------------------------------------------------------------------------
// const fib = function (n) {
//     if (n <= 1) return n;
//     return fib(n - 1) + fib(n - 2)

// };
// console.log(fib(3));

//One Liner
const fib=(n)=>(n<=1?n:fib(n-1)+fib(n-2))

console.log(fib(3));

//n=3 => fib(2) + fib(1)  // 1+1=2
// fib(2)=> fib(0)+fib(1) =>1