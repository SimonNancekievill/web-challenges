export default function App() {
  return (
    <div>
      <Greeting coach="Feline" name="Feline" />
      <Greeting coach="Klaus" name="Simon" />
    </div>
  );
}

function Greeting({ name, coach }) {
  return (
    <div>
      <h1> Hello, {coach === name ? "Coach" : name}!</h1>
    </div>
  );
}
