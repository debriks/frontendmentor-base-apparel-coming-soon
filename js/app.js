const btn = document.querySelector("#btn");

const emailWarning = document.querySelector("#email");
const warning = document.querySelector(".submit__warning");
const warningIcon = document.querySelector("#warningIcon");

const show = () => {
  emailWarning.classList.add("visible");
  warning.classList.add("visible");
  warningIcon.classList.add("visible");
};

const hide = () => {
  emailWarning.classList.remove("visible");
  warning.classList.remove("visible");
  warningIcon.classList.remove("visible");
};

const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

btn.addEventListener("click", (e) => {
  let value = emailWarning.value;
  e.preventDefault();
  if (re.test(value)) {
    hide();
  } else {
    show();
  }
});
