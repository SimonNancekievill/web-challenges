export default function App() {
  return (
    <div>
      <Sum valueA={20} valueB={67} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  return (
    <div>
      {valueA} + {valueB} = {valueA + valueB}
    </div>
  );
}
