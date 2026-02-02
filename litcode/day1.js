
// 1281. Subtract the Product and Sum of Digits of an Integer
/*var subtractProductAndSum = function (n) {
    let product = 1;
    let sum = 0;

    while (n != 0) {
        let digit = n % 10;
        product = product * digit;
        sum = sum + digit;
        n = Math.floor(n / 10);
    }
    let ans = product - sum;
    return ans
};
console.log(subtractProductAndSum(254))
*/


// 191. Number of 1 Bit
/*var hammingWeight = function (n) {

    let count = 0;
    while (n != 0) {
        if (n & 1) {
            count++;
        }
        n = n >> 1;
    }

    return count;
};
console.log(hammingWeight(2147483645))
*/





