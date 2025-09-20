function avgEven(start, end) {
    let sumNumbers = 0;
    let lenghtEvens = 0;
    for (start; start <= end; start++){
        if (start % 2 == 0) {
            sumNumbers += start;
            lenghtEvens++;}}alert((sumNumbers/lenghtEvens)+1)}

avgEven(10, 20);
avgEven(20, 30);
avgEven(30, 40);
avgEven(40, 50);
avgEven(50, 60);
avgEven(60, 70);
avgEven(70, 80);
avgEven(80, 90);
avgEven(90, 100);
