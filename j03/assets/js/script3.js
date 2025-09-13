let num1 = 10;
let op = "*";
let num2 = 2;

switch (op) {
  case "+":
    console.log(num1 + num2);
  case "-":
    console.log(num1 - num2);
  case "*":
    console.log(num1 * num2);
    case "/":
        switch (num2) {
            case 0:
                console.log("can not devide by zero");
            default:
                console.log(num1 / num2);
        }
}
