const x = 50;
let g = +prompt("guess a number")

if (g === x) {
    alert("you win")
}
else if (g > x) {
    alert("the correct number was smaller than your guess")
}
else {
    alert("the correct number was bigger than your guess");
}
