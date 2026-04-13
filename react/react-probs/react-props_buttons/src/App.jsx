export default function App() {
  function handleClick(text) {
    console.log(`You clicked the Button: ${text}`);
  }
  return (
    <div>
      <Button text="Submit" color="#1fff53" onClick={handleClick} />
      <Button text="Danger" color="rgb(255, 7, 7)" onClick={handleClick} />
      <Button text="Disabled" disabled onClick={handleClick} />
    </div>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      style={{ backgroundColor: disabled ? "grey" : color, height: "100px" }}
      onClick={() => onClick(text)}
    >
      {text}
    </button>
  );
}
