
//Decimal to Binary.......
/*
let n = 8;
let ans = 0;
let i = 0;
while (n != 0) {
    let bit = n & 1;
    ans = (bit * Math.pow(10, i)) + ans;
    n = n >> 1;
    i++;
}
console.log("ans:", ans)
*/


// Binary to Decimal.......
/*let n = 1010;
let ans = 0;
let i = 0;
while (n != 0) {
    let digit = n % 10;
    if (digit == 1) {
        ans = ans + 2 ** i;
    }
    n = Math.floor(n / 10);
    i++;
}
console.log("ans:", ans)
*/

let n = -1234;
let ans = 0;
const INT_MAX = 2 ** 31 - 1;
const INT_MIN = -(2 ** 31);
let sign = n < 0 ? -1 : 1;
n = Math.abs(n);
while (n != 0) {
    let digit = n % 10;
    if ((ans > Math.floor(INT_MAX / 10)) || (ans < Math.floor(INT_MIN / 10))) {
        ans = 0
        break;
    }
    ans = ans * 10 + digit;
    n = Math.floor(n / 10);
}
console.log("ans:", ans * sign)