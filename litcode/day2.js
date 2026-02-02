// 7. Reverse Integer
// example:> 123=> 321 |  -435=>-534
/*let n = -1234;
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
*/


// 1009. Complement of Base 10 Integer
// for n=5, n=7, n=0 etc.
/*let n = 0;
let m = n;
let mask = 0;
//edge case for n=0
if (n == 0) {
    // return 1;
    console.log('ans:', 1)
}
else {
    while (m != 0) {
        mask = (mask << 1) | 1;
        m = m >> 1;
    }
    let ans = (~n) & mask;
    console.log('ans: ', ans)
}*/
// 476. Number Complement

// 231. Power of Two
/*var isPowerOfTwo = function (n) {
    for (let i = 0; i <= 30; i++) {
        let ans = 2 ** i;

        if (ans == n) {
            return true;
        }
    }
    return false;
};
console.log(isPowerOfTwo(116));
*/
const INT_MAX = (2 ** 31) - 1;
var isPowerOfTwo = function (n) {
    let ans = 1;
    for (let i = 0; i <= 30; i++) {
        if (ans == n) {
            return true;
        }
        if (ans < Math.floor(INT_MAX / 2)) {
            ans = ans * 2
        }
    }
    return false;
};
console.log(isPowerOfTwo(1));


