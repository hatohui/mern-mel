const userField = document.getElementById("username");
const usetInfoField = document.getElementById("userInfo");
const button = document.getElementById("loginButton");
const passwordField = document.getElementById("password");
const passwordInfoField = document.getElementById("passwordInfo");

window.onload = () => {
  userField.focus();
};

const enablePassword = () => {
  passwordField.removeAttribute("readonly");
};

const validateUsername = () => {
  if (userField.value == "hello") return true;
  return false;
};

const enableLoginButton = () => {
  button.removeAttribute("disabled");
  button.classList.remove("opacity-50");
};

const showInvalidUsername = () => {
  userField.classList.add("border-red-500");
  userField.classList.add("focus:border-red-500");
  userField.classList.add("focus:ring-red-500");
  usetInfoField.innerText = "Invalid username. Try 'hello'";
};

const removeInvalidUsername = () => {
  userField.classList.remove("border-red-500");
  userField.classList.remove("focus:border-red-500");
  userField.classList.remove("focus:ring-red-500");
  usetInfoField.innerText = "";
};

const validatePassword = () => {
  if (passwordField.value == "world") return true;
  return false;
};

const showInvalidPassword = () => {
  passwordField.classList.add("border-red-500");
  passwordField.classList.add("focus:border-red-500");
  passwordField.classList.add("focus:ring-red-500");
  passwordInfoField.innerText = "Invalid password. Try 'world'";
};

userField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (validateUsername()) {
      enablePassword();
      passwordField.focus();
    } else {
      showInvalidUsername();
    }
  } else {
    removeInvalidUsername();
  }
});

passwordField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (validatePassword()) {
      enableLoginButton();
    } else {
      showInvalidPassword();
    }
  }
});
