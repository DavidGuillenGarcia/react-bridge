import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

const PokemonContainer = ({ input }) => {
  const [pokemonList, setPokemonList] = useState(null);

  useEffect(() => {
    if (input) {
      fetch(`https://dragonball-api.com/api/characters?name=${input}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPokemonList(data);
          console.log(data);
        });
    }
  }, [input]);

  return (
    <div className="pokemon-container">
      {pokemonList &&
        pokemonList.length > 0 &&
        pokemonList.map((pokemon) => (
          <Pokemon
            key={pokemon.name}
            image={pokemon.image}
            name={pokemon.name}
          />
        ))}
    </div>
  );
};

export default PokemonContainer;
