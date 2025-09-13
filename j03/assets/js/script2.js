let user1 = prompt("user1");
let user2 = prompt("user2");

if (user1 == "sang" || user1 == "kaghaz" || user1 == "gheichi") {
  if (user2 == "sang" || user2 == "kaghaz" || user2 == "gheichi") {
    if (user1 == user2) {
      alert("draw");
    } else if (user1 == "sang") {
      if (user2 == "kaghaz") {
        alert("user2 win");
      } else {
        alert("user1 win");
      }
    } else if (user1 == "kaghaz") {
      if (user2 == "gheichi") {
        alert("user2 win");
      } else {
        alert("user1 win");
      }
    } else {
      if (user2 == "sang") {
        alert("user2 win");
      } else {
        alert("user1 win");
      }
    }
  } else {
    alert("user2 invalid choice");
  }
} else {
  alert("user1 invalid choice");
}
