import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World!</h1>
      <p>
        This is my first React Component which uses a wrapper to return more
        than one element.
      </p>
      <button type="button" onClick={() => console.log("I am a Dolphin!")}>
        🐬
      </button>
    </article>
  );
}
