let running = 1;
let l = 0;
let majmoo = 0;
while (running) {
    let num = Number(prompt("عدد مورد نظر را وارد کنید"));
    if (num == -1) {
        // running = 0;
        alert("1")
        break
        alert("2")
    }
    else {
        majmoo += num;
        l += 1;
    }
}

alert(majmoo / l);
