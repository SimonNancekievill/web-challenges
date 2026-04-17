import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${id}`,
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [id]);

  if (id < 0) {
    return (
      <main>
        <h1>No pokemons on the site…</h1>
        <button type="button" onClick={() => setId(id + 20)}>
          Add 20 pokemons to your list…
        </button>
      </main>
    );
  }

  return (
    <main>
      <button type="button" onClick={() => setId(id - 20)}>
        Previous Page
      </button>
      <button type="button" onClick={() => setId(id + 20)}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
