console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
// query.Selector used
const additionButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
additionButton.addEventListener("click", () => {
  const additionSum = operand1 + operand2;
  console.log(additionSum);
});
subtractButton.addEventListener("click", () => {
  const subtractionSum = operand1 - operand2;
  console.log(subtractionSum);
});
multiplyButton.addEventListener("click", () => {
  const multiplySum = operand1 * operand2;
  console.log(multiplySum);
});
divideButton.addEventListener("click", () => {
  const divisionSum = operand1 / operand2;
  console.log(divisionSum);
});
exponentButton.addEventListener("click", () => {
  const exponentSum = operand1 ** operand2;
  console.log(exponentSum);
});
moduloButton.addEventListener("click", () => {
  const moduloSum = operand1 % operand2;
  console.log(moduloSum);
});

// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
const increaseOperandByOneButton = document.querySelector(
  '[data-js="increase-by-one"]',
);
const increaseOperandByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]',
);
const decreaseOperandByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]',
);
const decreaseOperandByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]',
);
const multiplyOperandByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]',
);
const divideOperandByTwoButton = document.querySelector(
  '[data-js="divide-by-two"]',
);

increaseOperandByOneButton.addEventListener("click", () => {
  operand1++;
  console.log(operand1);
});

increaseOperandByFiveButton.addEventListener("click", () => {
  operand1 += 5;
  console.log(operand1);
});

// --^-- write your code here --^--
