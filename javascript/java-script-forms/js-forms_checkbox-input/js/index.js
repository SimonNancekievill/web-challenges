console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const formSuccess = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showFormSuccess() {
  formSuccess.removeAttribute("hidden");
}
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (tosCheckbox.checked === true) {
    alert("Form submitted");
    hideTosError();
    showFormSuccess();
  } else {
    alert("To continue, please accept our Terms of Service!");
    showTosError();
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  // alert("Form submitted");
});
tosCheckbox.addEventListener("input", () => {
  if (tosCheckbox.checked === true) {
    hideTosError();
  } else {
    showTosError();
  }
});
