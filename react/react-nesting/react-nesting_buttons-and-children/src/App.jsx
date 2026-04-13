import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Reward!</Button>
      <Button>Danger!</Button>
      <Button>What is happening here?</Button>
      <Button>Submit</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
