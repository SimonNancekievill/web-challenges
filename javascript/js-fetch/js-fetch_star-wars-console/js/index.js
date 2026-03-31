// console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  //   results.forEach((result) => {
  //     console.log("Name: " + result.name);
  //   });
  console.log(results);
  console.log(results[2].eye_color);
  return data;
}
fetchData();
