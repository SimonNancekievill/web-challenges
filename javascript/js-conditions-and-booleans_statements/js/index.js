// const { useInsertionEffect } = require("react");

console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "123456789";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 23;

if (number % 2 === 0) {
  console.log(number + " is an even number.");
} else {
  console.log(number + " is an odd number.");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1000500;

if (numberOfHotdogs < 5) {
  console.log("The costumer has to pay 2 Euro per hotdog.");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("The costumer has to pay 1.50 Euro per hotdog.");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("The costumer has to pay 1 Euro per hotdog.");
} else if (numberOfHotdogs >= 1000000) {
  console.log("The costumer has to pay 0.10 Euro per hotdog.");
} else {
  console.log("error");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn …" : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Klaus";

const greeting = "Hello " + (userName === "Klaus" ? "Klaus" : userName) + "!";

console.log(greeting);
