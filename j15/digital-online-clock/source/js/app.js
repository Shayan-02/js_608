const hoursElem = document.querySelector(".hours");
const minutesElem = document.querySelector(".minutes");
const secondsElem = document.querySelector(".seconds");

setInterval(() => {
  const date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  if (hour < 10) {hour = "0" + hour;}

  if (minute < 10) {minute = "0" + minute;}

  if (second < 10) {second = "0" + second;}

  hoursElem.innerHTML = hour;
  minutesElem.innerHTML = minute;
  secondsElem.innerHTML = second;
}, 1000);
