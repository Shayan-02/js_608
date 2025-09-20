let numbers = [-1, -2, 4, -3, 1, 2, 3, 4, 5];
let negative = 0;
let possetive = 0;
let zero = 0;


for (let i = 0; i < numbers.length; i++){
    if (numbers[i] < 0) negative++;
    else if (numbers[i] === 0) zero++;
    else possetive++;
}

alert(`تعداد اعداد منفی ${negative} \nتعداد اعداد مثبت ${possetive} \nتعداد صفر ها ${zero}`);
