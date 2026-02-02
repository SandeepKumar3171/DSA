/*let factorial = (n) => {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i
    }
    return fact;
}

let nCr = (n, r) => {
    let num = factorial(n);
    let denom = factorial(r) * factorial(n - r);
    return Math.floor(num / denom);
}

console.log('nCr==>>',nCr(8,2))
*/

// A.P.==>> (3 * n + 7) // find nth num
let apFun = (n) => {
    let ans = (3 * n + 7)
    return ans;
}
console.log('A.P==>>', apFun(8))


// Find total number of set bit in a & b
//Examp:
//  a=2 => 10
//  b=3 => 11   =>total tree (111)=>ans: 3


// Find fibonnoci series for given number n th term
// examp n=5
// 0, 1, 1, 2, 3, 5, 8, 13, - - - - =>> (5th number is 3) Ans is : 3


