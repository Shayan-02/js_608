// let i = 0;

// while (i < 5) {
//     console.log(i);
//     i += 1 // i = i + 1 // i++
// }

let c = 75;
let i = 5;
while (i > 0) {
    let g = +prompt("حدس بزنید")
    if (g === c) {
        alert("شما برنده شدید");
        break;
    }
    else if (g > c) alert("عدد وارد شده بزرگتر از عدد درست است");
    else alert("عدد وارد شده کوچکتر از عدد درست است");
    i--;
}
