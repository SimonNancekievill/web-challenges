console.clear();

const form = document.querySelector('[data-js="form"]');
// console.log(form);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(event.target);
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const formElements = event.target.elements;
  console.log(data);

  event.target.reset();
  formElements.firstName.focus();
});
