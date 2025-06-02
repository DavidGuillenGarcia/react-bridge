import { useEffect, useState } from "react";
import Character from "./Character";

const CharacterContainer = ({ input }) => {
  const [characterList, setCharacterList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (input) {
      fetch(`https://dragonball-api.com/api/characters?name=${input}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.length > 0) {
            setError(null);
            setCharacterList(data);
          } else {
            setCharacterList(null);
            setError("No results found.");
          }
        });
    }
  }, [input]);

  return (
    <div className="character-container">
      {characterList &&
        characterList.length > 0 &&
        characterList.map((character) => (
          <Character
            key={character.name}
            image={character.image}
            name={character.name}
          />
        ))}
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default CharacterContainer;
