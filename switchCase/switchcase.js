let amount = 1330;

let n100 = 0, n50 = 0, n20 = 0, n1 = 0;

while (amount > 0) {
    switch (true) {
        case amount >= 100:
            n100++;
            amount -= 100;
            break;

        case amount >= 50:
            n50++;
            amount -= 50;
            break;

        case amount >= 20:
            n20++;
            amount -= 20;
            break;

        case amount >= 1:
            n1++;
            amount -= 1;
            break;
    }
}

console.log("100 notes:", n100);
console.log("50 notes:", n50);
console.log("20 notes:", n20);
console.log("1 notes:", n1);
