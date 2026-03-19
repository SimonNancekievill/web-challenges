// Change this value to test different "weather" conditions.
const weather = "sunny";
// switch (weather) {
//   case "sunny":
//     console.log("It´s sunny outside.");
//     break;
//   case "rainy":
//     console.log("It´s rainy outside, pack an umbrella.");
//     break;
//   case "snowy":
//     console.log("Better put your boots on, it´s snowing.");
//     break;
//   default:
//     console.log("I'm not sure what the weather is like.");
// }
// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 26;
switch (weather && temperature) {
  case "sunny" && temperature > 20:
    console.log("It's sunny and warm!");
    break;
  case "sunny" && temperature < 20:
    console.log("It's sunny, but a bit chilly!");
    break;
  case "rainy":
    console.log("It is rainy, dont forget your Umbrella!");
    break;
  case "snowy" && temperature < 0:
    console.log("Freezing snow!");
    break;
  default:
    console.log("I'm not sure what the weather is like.");
}
