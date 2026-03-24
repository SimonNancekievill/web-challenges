console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  const addition = formElements.numberA.value + formElements.numberB.value;
  console.log(addition);
  // const addition = event.target.element.
  let result;

  // --v-- write your code here --v--

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
