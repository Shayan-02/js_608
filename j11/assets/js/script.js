const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const modal = document.getElementById("customModal");
const modalMessage = document.getElementById("modalMessage");
const modalIcon = document.getElementById("modalIcon");
const closeModal = document.querySelector(".close");


function showFieldError(element, message) {
  element.textContent = message;
  element.classList.add("show");
}

function hideFieldError(element) {
  element.classList.remove("show");
}


function validateUsername() {
  const value = usernameInput.value.trim();
  if (value.length < 5) {
    showFieldError(usernameError, "نام کاربری باید حداقل 5 کاراکتر باشد.");
    return false;
  }
  hideFieldError(usernameError);
  return true;
}


function validatePassword() {
  const value = passwordInput.value;
  if (value.length < 8) {
    showFieldError(passwordError, "رمز عبور باید حداقل 8 کاراکتر باشد.");
    return false;
  }
  hideFieldError(passwordError);
  return true;
}

usernameInput.addEventListener("blur", validateUsername);
usernameInput.addEventListener("focus", () => hideFieldError(usernameError));

passwordInput.addEventListener("blur", validatePassword);
passwordInput.addEventListener("focus", () => hideFieldError(passwordError));


loginForm.addEventListener("submit", event => {
  event.preventDefault();

  const isUsernameValid = validateUsername();
  const isPasswordValid = validatePassword();

  if (isUsernameValid && isPasswordValid) {
    showModal("✅ ورود با موفقیت انجام شد!", "success");

  } else {
    showModal("❌ لطفاً خطاهای فرم را برطرف کنید.", "error");
  }
});


function showModal(message, type) {
  modalMessage.textContent = message;
  modalIcon.textContent = type === "success" ? "✅" : "⚠️";
  modal.style.display = "flex";
}


closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
