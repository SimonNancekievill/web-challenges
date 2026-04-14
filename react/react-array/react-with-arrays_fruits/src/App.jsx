import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1234,
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: 4567,
      name: "🍓 Strawberry",
      color: "red",
    },
    {
      id: 9876,
      name: "🍏 Apple",
      color: "green",
    },
    {
      id: 5732,
      name: "🍉 Watermelon",
      color: "green, red",
    },
  ];
  return (
    <div className="app">
      {fruits.map((fruit) => (
        <li key={fruit.id}>
          <Card name={fruit.name} color={fruit.color} id={fruit.id} />
        </li>
      ))}
    </div>
  );
}
