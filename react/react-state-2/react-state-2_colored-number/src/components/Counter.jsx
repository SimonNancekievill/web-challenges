import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [count, setCounter] = useState(0);

  function handleIncreaseCounter() {
    setCounter(count + 1);
    console.log(count);
  }
  function handleDecreaseCounter() {
    setCounter(count - 1);
    console.log(count);
  }
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={handleIncreaseCounter}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={handleDecreaseCounter}
        >
          -
        </button>
      </div>
    </div>
  );
}
