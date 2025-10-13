const htmlTag = document.querySelector("html");
const changeThemeBtn = document.querySelector(".theme-btn");
const jsCourseElem = document.querySelector(".product-img.javascript");
const reactCourseElem = document.querySelector(".product-img.reactjs");
const nextCourseElem = document.querySelector(".product-img.nextjs");

let theme = "light";

function changeTheme() {
  changeThemeBtn.innerHTML = "";

  if (theme === "light") {
    theme = "dark";
    localStorage.setItem("theme", "dark");
    changeThemeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    theme = "light";
    localStorage.setItem("theme", "light");
    changeThemeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }

  setTheme();
}

function detectTheme() {
  const localTheme = localStorage.getItem("theme");

  if (localTheme) {
    theme = localTheme;
  }

  setTheme();
}

function setTheme() {
  changeThemeBtn.innerHTML = "";

  if (theme === "light") {
    htmlTag.classList.remove("dark");
    jsCourseElem.setAttribute("src", "./public/images/light-js.png");
    reactCourseElem.setAttribute("src", "./public/images/light-reactjs.png");
    nextCourseElem.setAttribute("src", "./public/images/light-nextjs.png");
    changeThemeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    htmlTag.classList.add("dark");
    jsCourseElem.setAttribute("src", "./public/images/dark-js.png");
    reactCourseElem.setAttribute("src", "./public/images/dark-reactjs.png");
    nextCourseElem.setAttribute("src", "./public/images/dark-nextjs.png");
    changeThemeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
}

changeThemeBtn.addEventListener("click", changeTheme);
