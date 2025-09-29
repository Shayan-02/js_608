function validateForm() {
  let user = document.forms["myForm"]["username"].value;
  let pass1 = document.forms["myForm"]["pass1"].value;
  let pass2 = document.forms["myForm"]["pass2"].value;
  if (user.length < 5) {
    alert("username must be atleast 5 chars");
    return false;
  }
  else if (pass1 !== pass2) {
    alert("password1 must be same as password2")
    return false;
  }
  else if (pass1.length < 8) {
    alert("password must be atleast 8 chars")
    return false;
  }
  else{
    alert("register successfully")
    return true;
  }
}

let x = document.addEventListener("submit", validateForm)