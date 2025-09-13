// let i = 1;
// while (i <= 500) {
//     console.log(i);
//     i++;}

let i = 1;
let s = 0;
while (i <= 4) {
    let number = +prompt(`num ${i}`);
    s += number;
    i++;
}

let avg = s / 4;
alert(`average: ${avg}`)
