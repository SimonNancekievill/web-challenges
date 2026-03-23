console.clear();
const firstInput = document.querySelector('[data-js="first-input"]');
const button = document.querySelector('[data-js="button-uppercase"]');

button.addEventListener("click", () => {
  const lowercaseInput = firstInput.value;
  const uppercaseInput = lowercaseInput.toUpperCase();
  firstInput.value = uppercaseInput;
});
