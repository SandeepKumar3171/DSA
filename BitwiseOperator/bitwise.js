
//........Bitwise Operator...........
// let a = 4;
// let b = 6;

// OR => a|b
// & => a&b
// NOT => ~a
// XOR => a^b

// console.log("a|b", a | b)
// console.log("a&b", a & b)
// console.log("~a", ~a)
// console.log("a^b", a ^ b)

// Right shift
// console.log("15>>1", 15 >> 1)   //==>(1st time) 15/2=>7 (INT)
// console.log("15>>2", 15 >> 2)   //==>(1st time) 15/2=>7 => (2nd time) 7/2==> 3 (INT)

//Left shift
// console.log("15<<1", 15 << 1)   //==>(1st time) 15*2=>30 (INT)
// console.log("15<<2", 15 << 2)   //==>(1st time) 15*2=>30 => (2nd time) 30*2==> 60 (INT)

// Preincrement.....
// let i = 4;
// let a = ++i;
// console.log("a,i", a, i)  //=> 5,5



// Postincrement.....
// let j = 4;
// let b = j++;
// console.log("b,j", b, j)  //=> 4,5



// let a, b = 1;
// a = 10
// if (++a) {
//     console.log("b:", b)
// }
// else {
//     console.log("++b:", ++b)
// }



// let a = 1;
// let b = a++;
// let c = ++a;
// console.log("b:", b)
// console.log("c:", c)


// Fibonacci series.........


// let arr = [];
// let a = 0;
// let b = 1;

//  10 Fibonacci series
/*for (let i = 1; i < 10; i++) {
    let nextNum = a + b;
    arr.push(nextNum)
    // console.log("nextNum", nextNum)
    a = b;
    b = nextNum;
}
console.log("arr", arr)*/

// 1 to 100 Fibonacci series
/*for (let i = 1; a + b < 100; i++) {
    let nextNum = a + b;
    arr.push(nextNum)
    a = b;
    b = nextNum;
} 
console.log("arr", arr)*/


// Prime Number---------
// 1 to 100 Prime Number
// let n = 11
// for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//         console.log('Not a Prime Number')
//     } else {
//         console.log("Prime Number")
//     }
// }



// let n = 17
// let isPrime = 1;
// for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//         isPrime = 0;
//         break;
//     }
// }
// console.log(isPrime == 1 ? 'Prime Number' : 'Not a Prime Number')


// for (let i = 0; i <= 5; i++) {
//     console.log("i:", i)
//     i++;
// }


// for (let i = 0; i <= 15; i += 2) {
//     console.log("i:", i)
//     if (i & 1) {
//         continue;
//     }
//     i++
// }


// for (let i = 0; i < 5; i++) {
//     for (let j = i; j <= 5; j++) {
//         console.log("i:", i)
//     }
// }


for (let i = 0; i < 5; i++) {
    for (let j = i; j <= 5; j++) {
        if (i + j == 10) {
            break;
        }
        console.log("i:", i, "j:", j)
    }
}