console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --v-- write your code here --v--
// function books(bookTitle, bookAuthor, bookRatings, booksSold) {}

const bookTitle = "The Lord of the Javascrip";
const bookAuthor = "Mario";
const bookRating = 4.2;
const booksSold = 120;

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

// --v-- write your code here --v--
console.log("Title: " + bookTitle);
console.log("Author: " + bookAuthor);
console.log("Rating: " + bookRating);
console.log("Sales: " + booksSold);

const bookRating2025 = bookRating + 0.8;
const booksSoldUpdated = booksSold + 40;

console.log("Title: " + bookTitle);
console.log("Author: " + bookAuthor);
console.log("Rating: " + bookRating2025);
console.log("Sales: " + booksSoldUpdated);

// --^-- write your code here --^--

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/

// --v-- write your code here --v--
console.clear();

function logBookData(bookTitle, bookAuthor, bookRating, booksSold) {
  console.log("Title: " + bookTitle);
  console.log("Author: " + bookAuthor);
  console.log("Rating: " + bookRating);
  console.log("Sales: " + booksSold);
}
logBookData("Herr der Ringe", "Feline Huhn", 4.9, 2350);
logBookData("Herr der Ringe", "Feline Huhn", 4.9, 2400);
logBookData("Herr der Ringe", "Feline Huhn", 4.9, 2650);
// --^-- write your code here --^--
