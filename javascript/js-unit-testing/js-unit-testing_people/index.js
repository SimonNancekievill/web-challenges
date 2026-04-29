export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`);
}

export function getPeopleByAge(people, age) {
  /* Durch peolpe array durchlaufen um zu schauen ob das alter mit dem angegebenen Alter übereinstimmt, wenn ja, 
aus den personen ein Array erstellen mit den Nachnamen.
*/

  /* const filteredAge = people.filter((person) => person.age === age) 
 return filteredAge.map((person) => `${person.lastName}`)
*/

  return people
    .filter((person) => person.age === age)
    .map((person) => `${person.lastName}`);
}

export function getPeopleNamesOlderThan(people, age) {
  /*über das people array laufen, und schauen ob das alter größer ist als das angegebenen Alter, wenn ja, aus den ausgewählten ein array erstellen
mit dem Namen als String.*/
  return people
    .filter((person) => person.age > age)
    .map((person) => `${person.firstName} ${person.lastName}`);

  // const filteredAge = people.filter((person) => person.age < age);
  // return filteredAge.toSorted(
  //   filteredAge.map((person) => `${person.firstName} ${person.lastName}`)
  // );
}

export function getPeopleByLastName(people, lastName) {
  /*über das people array laufen und den eingegebenen Namen mit den namen vergleichen, alle übereinstimmungen in ein Array packen und den vollen namen ausgeben.*/

  return people
    .filter((person) => person.lastName === lastName)
    .map((person) => `${person.firstName} ${person.lastName}`);
}

export function findPersonById(people, id) {
  /*über das people array laufen und sobald die id stimmt, die person als ganzes object ausgeben*/

  return people
    .filter((person) => person.id === id)
    .map((person) => Object.fromEntries(`id: {person.id}`));
}

export function isAnyoneOlderThan(people, age) {}

export function getLastNamesSortedByAge(people) {}
