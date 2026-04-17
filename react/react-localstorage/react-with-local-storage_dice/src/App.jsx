import { D6Button } from "./components/D6Button";
import History from "./components/History";
import { getD6Roll } from "./utils";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [rolls, setRolls] = useState([]);

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };

  return (
    <div className="app">
      <main className="app__main">
        <D6Button rolls={rolls} onHandleRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={[]} />
      </aside>
    </div>
  );
}
