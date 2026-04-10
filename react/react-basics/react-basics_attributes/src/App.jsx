import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">I am a H2 Element!</h2>
      <label htmlFor="articleInput">
        <input id="articleInput"></input>
      </label>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/React"
        target="blank"
      >
        Find out more about React!
      </a>
    </article>
  );
}
