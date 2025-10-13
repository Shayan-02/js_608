const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");
const loginButton = document.querySelector(".login-button");
const modal = document.querySelector(".modal-screen");
const modalButton = document.querySelector(".modal-button");
const modalMessage = document.querySelector(".modal-card p");
const modalImg = document.querySelector(".modal-card img");

let isValidData = false;

function login(event) {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  modal.classList.remove("hidden");

  if (username.length < 3 || password.length < 8) {
    modalButton.innerHTML = "تلاش مجدد";
    modalMessage.innerHTML = "اطلاعات وارد شده صحیح نمی‌باشند";
    modalImg.setAttribute("src", "./public/images/failed.png");

    isValidData = false;
  } else {
    modalButton.innerHTML = "برو به پنل کاربری";
    modalMessage.innerHTML = "لاگین با موفقیت انجام شد";
    modalImg.setAttribute("src", "./public/images/success.png");
    isValidData = true;
  }
}

function modalClickHandler() {
  if (isValidData) {
    location.href = "http://127.0.0.1:5500/j13/login/home/index.html";
    // location.assign("http://127.0.0.1:5500/home/index.html");
    // location.replace("http://127.0.0.1:5500/home/index.html");
  } else {
    modal.classList.add("hidden");
  }
}

loginButton.addEventListener("click", login);
modalButton.addEventListener("click", modalClickHandler);
