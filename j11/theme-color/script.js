const themeCssVariables = document.querySelector(":root");
const colorBtns = document.querySelectorAll(".btn");

colorBtns.forEach((colorBtn) => {
  colorBtn.addEventListener("click", (event) => {
    let mainThemeColor = event.target.dataset.color;

    themeCssVariables.style.setProperty("--theme-color", mainThemeColor);
  });
});
