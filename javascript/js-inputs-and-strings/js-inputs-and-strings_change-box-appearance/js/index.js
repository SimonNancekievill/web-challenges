console.clear();
const boxElement = document.querySelector('[data-js="box"]');
const colourInput = document.querySelector('[data-js="input-color"]');
const radiusInput = document.querySelector('[data-js="input-radius"]');
const rotationInput = document.querySelector('[data-js="input-rotation"]');

// EventListener for colourInput //
colourInput.addEventListener("input", () => {
  boxElement.style.background = `hsl(${colourInput.value}, 70%, 60%)`;
});

// EventListener for radiusInput //
radiusInput.addEventListener("input", () => {
  boxElement.style.borderRadius = `${radiusInput.value}%`;
});

console.log(rotationInput);
rotationInput.addEventListener("input", () => {
  boxElement.style.transform = `rotate(${rotationInput.value}deg)`;
});
