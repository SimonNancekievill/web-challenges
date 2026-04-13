export default function App() {
  return (
    <div>
      <Smiley isHappy />
    </div>
  );
}

function Smiley({ isHappy }) {
  return <div>{isHappy ? <span>😁</span> : <span>😒</span>}</div>;
}
