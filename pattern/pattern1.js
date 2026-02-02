// * * * * 
// * * * * 
// * * * * 
// * * * *
/*const n = 4;
let str='';
let i;
for (i = 1; i <= n; i++) {
    for (let y = 1; y <= n; y++) {
        str +='* ';
    }
    str +='\n'
}
console.log(str)
*/


// *  
// * *  
// * * *  
// * * * *
/*const n = 4;
let str = '';
let i;
for (i = 1; i <= n; i++) {
    for (let y = 1; y <= i; y++) {
        str += '* ';
    }
    str += '\n'
}
console.log(str)
*/


// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
/*const n = 4;
let str = '';
let i;
for (i = 1; i <= n; i++) {
    for (let y = 1; y <= n; y++) {
        str += i + ' ';
    }
    str += '\n'
}
console.log(str)
*/


// 1 2 3 4 
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
/*const n = 4;
let str = '';
let i;
for (i = 1; i <= n; i++) {
    for (let y = 1; y <= n; y++) {
        str += y + ' ';
    }
    str += '\n'
}
console.log(str)
*/


// 4 3 2 1 
// 4 3 2 1 
// 4 3 2 1 
// 4 3 2 1 
/*const n = 4;
let str = '';
let i;
for (i = 1; i <= n; i++) {
    for (let y = n; y >= 1; y--) {
        str += y + ' ';
    }
    str += '\n'
}
console.log(str)
*/



// 1 2 3 4 
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16 
/*const n = 4;
let str = '';
let i;
let count = 1;
for (i = 1; i <= n; i++) {
    for (let y = 1; y <= n; y++) {
        str += count + ' ';
        count = count + 1;
    }
    str += '\n'
}
console.log(str)
*/


// 1 
// 2 2
// 3 3 3
// 4 4 4 4 
/*const n = 4;
let str = '';
let i;
for (i = 1; i <= n; i++) {
    for (let y = 1; y <= i; y++) {
        str += i + ' ';
    }
    str += '\n'
}
console.log(str)
*/



// 1 
// 2 3
// 4 5 6
// 7 8 9 10
/*const n = 4;
let str = '';
let i;
let count = 1;
for (i = 1; i <= n; i++) {
    for (let y = 1; y <= i; y++) {
        str += count + ' ';
        count = count + 1;
    }
    str += '\n'
}
console.log(str)
*/



// 1 
// 2 3
// 3 4 5
// 4 5 6 7
/*const n = 4;
let str = '';
let i;
for (i = 1; i <= n; i++) {
    let count = i;
    for (let y = 1; y <= i; y++) {
        str += count + ' ';
        count = count + 1;
    }
    str += '\n'
}
console.log(str)
*/



// 1 
// 2 3
// 3 4 5
// 4 5 6 7
/*const n = 4;
let str = '';
let i;
for (i = 1; i <= n; i++) {
    for (let y = 0; y < i; y++) {
        str += i + y + ' ';
    }
    str += '\n'
}
console.log(str)
*/



// 1 
// 2 1
// 3 2 1
// 4 3 2 1
/*const n = 16;
let str = '';
let i;
for (i = 1; i <= n; i++) {
    for (let y = i; y >= 1; y--) {
        str += y + ' ';
    }
    str += '\n'
}
console.log(str)
*/


// A A A A 
// B B B B
// C C C C
// D D D D
/*const n = 4;
let str = '';
let i;
let ch;
for (i = 1; i <= n; i++) {
    for (let y = 1; y <= n; y++) {
        ch = String.fromCharCode(64 + i)
        str += ch + ' ';
    }
    str += '\n'
}
console.log(str)
*/


// A B C D 
// A B C D
// A B C D
// A B C D
/*const n = 4;
let str = '';
let i;
let ch;
for (i = 1; i <= n; i++) {
    for (let y = 1; y <= n; y++) {
        ch = String.fromCharCode(64 + y)
        str += ch + ' ';
    }
    str += '\n'
}
console.log(str)
*/


// A B C D 
// E F G H
// I J K L
// M N O P
/*const n = 3;
let str = '';
let i;
let ch;
let count=1;
for (i = 1; i <= n; i++) {
    for (let y = 1; y <= n; y++) {
        ch = String.fromCharCode(64 + count)
        str += ch + ' ';
        count=count+1
    }
    str += '\n'
}
console.log(str)
*/


// A B C D 
// B C D E
// C D E F
// D E F G
/*const n = 4;
let str = '';
let i;
let ch;
for (i = 1; i <= n; i++) {
    let count=i;
    for (let y = 1; y <= n; y++) {
        ch = String.fromCharCode(64 + count)
        str += ch + ' ';
        count=count+1
    }
    str += '\n'
}
console.log(str)
*/


// A 
// B B 
// C C C
// D D D D
/*const n = 4;
let str = '';
let i;
let ch;
for (i = 1; i <= n; i++) {
    for (let y = 1; y <= i; y++) {
        ch = String.fromCharCode(64 + i)
        str += ch + ' ';
    }
    str += '\n'
}
console.log(str)
*/



// A 
// B C
// D E F
// G H I J
/*const n = 4;
let str = '';
let i;
let ch;
let count=1;
for (i = 1; i <= n; i++) {
    for (let y = 1; y <= i; y++) {
        ch = String.fromCharCode(64 + count)
        str += ch + ' ';
        count=count+1
    }
    str += '\n'
}
console.log(str)
*/



// A 
// B C
// C D E
// D E F G
/*const n = 4;
let str = '';
let i;
let ch;
for (i = 1; i <= n; i++) {
    let count = i;
    for (let y = 1; y <= i; y++) {
        ch = String.fromCharCode(64 + count)
        str += ch + ' ';
        count = count + 1
    }
    str += '\n'
}
console.log(str)
*/


// D 
// C D
// B C D
// A B C D
/*const n = 4;
let str = '';
let i;
let ch;
for (i = 1; i <= n; i++) {
    for (let y = 1; y <= i; y++) {
        ch = String.fromCharCode(64 + (n + y - i))
        str += ch + ' ';
    }
    str += '\n'
}
console.log(str)
*/



//    *
//   **
//  ***
// ****
/*const n = 4;
let str = '';
let i;
for (i = 1; i <= n; i++) {
    for (k = 1; k <= (n - i); k++) {
        str += ' ';
    }
    for (let y = 1; y <= i; y++) {
        str += '*';
    }
    str += '\n'
}
console.log(str)
*/


// * * * * 
// * * *
// * *
// *
/*const n = 4;
let str = '';
let i;
for (i = 1; i <= n; i++) {
    for (let y = 1; y <= (n - i + 1); y++) {
        str += '* ';
    }
    str += '\n'
}
console.log(str)
*/


// ****
//  ***
//   **
//    *
/*const n = 4;
let str = '';
let i;
for (i = 1; i <= n; i++) {
    for (k = 1; k < i; k++) {
        str += ' ';
    }
    for (let y = 1; y <= n - i + 1; y++) {
        str += '*';
    }
    str += '\n'
}
console.log(str)
*/


// 1111
//  222
//   33
//    4
/*const n = 4;
let str = '';
let i;
for (i = 1; i <= n; i++) {
    for (k = 1; k < i; k++) {
        str += ' ';
    }
    for (let y = 1; y <= n - i + 1; y++) {
        str += i;
    }
    str += '\n'
}
console.log(str)
*/


//    1
//   22
//  333
// 4444
/*const n = 4;
let str = '';
let i;
for (i = 1; i <= n; i++) {
    for (k = 1; k <= n - i; k++) {
        str += ' ';
    }
    for (let y = 1; y <= i; y++) {
        str += i;
    }
    str += '\n'
}
console.log(str)
*/


// 1234
//  234
//   34
//    4
/*const n = 4;
let str = '';
let i;
for (i = 1; i <= n; i++) {
    let count=i;
    for (k = 1; k < i; k++) {
        str += ' ';
    }
    for (let y = 1; y <= n-i+1; y++) {
        str += count;
        count=count+1;
    }
    str += '\n'
}
console.log(str)
*/



//    1
//   23
//  456
// 78910
/*const n = 4;
let str = '';
let i;
let count=1;
for (i = 1; i <= n; i++) {
    for (k = 1; k < n-i+1; k++) {
        str += ' ';
    }
    for (let y = 1; y <= i; y++) {
        str += count;
        count=count+1;
    }
    str += '\n'
}
console.log(str)
*/



//    1
//   121
//  12321
// 1234321
/*const n = 4;
let str = '';
let i;
for (i = 1; i <= n; i++) {
    for (k = 1; k < n - i + 1; k++) {
        str += ' ';
    }
    for (let y = 1; y <= i; y++) {
        str += y;
    }
    for (let l = 1; l < i; l++) {
        str += i - l;
    }
    str += '\n'
}
console.log(str)
*/


// 1234554321
// 1234**4321
// 123****321
// 12******21
// 1********1
const n = 7;
let str = '';
let i;
for (i = 1; i <= n; i++) {
    for (k = 1; k <= n - i + 1; k++) {
        str += k;
    }
    for (let y = 1; y <= i - 1; y++) {
        str += '*';
    }
    for (let l = 1; l < i; l++) {
        str += '*';
    }
    for (let j = 1; j <= n - i + 1; j++) {
        str += n - i + 2 - j;
    }
    str += '\n'
}
console.log(str)