let lst = [];
let lst_reverse = [];

while (true) {
    let scores = Number(prompt("عدد را وارد کنید"));
    if (scores === -1) break;
    else lst.push(scores);
}

for (let i = lst.length - 1; i >= 0; i--) lst_reverse.push(lst[i]);

alert(lst_reverse)
