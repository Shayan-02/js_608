let rounds = +prompt("تعداد دست ها را مشخص کنید");
let user1_score = 0;
let user2_score = 0;
let tie = 0;


while (rounds) {
  let user1 = prompt("سنگ کاغذ قیچی");
  let user2 = prompt("سنگ کاغذ قیچی");
  if (user1 == "سنگ" || user1 == "کاغذ" || user1 == "قیچی") {
    if (user2 == "سنگ" || user2 == "کاغذ" || user2 == "قیچی") {
      if (user1 == user2) {
        alert(`${user1} و ${user2} در نتیجه مساوی شد`)
        tie++
      }
      else if (user1 == "سنگ") {
        if (user2 == "قیچی") {
          alert(`${user1} و ${user2} در نتیجه برنده کاربر اول است`);
          user1_score++;
        }
        else {
          alert(`${user1} و ${user2} در نتیجه برنده کاربر دوم است`);
          user2_score++;
        }
      }
      else if (user1 == "کاغذ") {
        if (user2 == "سنگ") {
          alert(`${user1} و ${user2} در نتیجه برنده کاربر اول است`);
          user1_score++;
        }
        else {
          alert(`${user1} و ${user2} در نتیجه برنده کاربر دوم است`);
          user2_score++;
        }
      }
      else if (user1 == "قیچی") {
        if (user2 == "کاغذ") {
          alert(`${user1} و ${user2} در نتیجه برنده کاربر اول است`);
          user1_score++;
        }
        else {
          alert(`${user1} و ${user2} در نتیجه برنده کاربر دوم است`);
          user2_score++;
        }
      }
      rounds--;
    }
  }
}

alert(`کاربر اول : ${user1_score}\nکاربر دوم : ${user2_score}\nتعداد دست های مساوی شده : ${tie}`)
