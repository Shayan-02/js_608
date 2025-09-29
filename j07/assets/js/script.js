// Add your JavaScript code here

function kamel(number) {
    let sumNumbers = 0;
    for (let i = 1; i < number / 2 + 1; i++) {
        if (number % i == 0) sumNumbers += i;
    }
    console.log(sumNumbers);
    
    console.log(sumNumbers == number)
}


let num = 6;
kamel(num)
kamel(20)
