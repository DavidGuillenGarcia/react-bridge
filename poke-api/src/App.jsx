import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import PokemonContainer from "./components/Pokemon/PokemonContainer";

function App() {
  const [inputSearch, setInputSearch] = useState("");

  const handleSearch = (input) => {
    setInputSearch(input);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <PokemonContainer input={inputSearch} />
    </>
  );
}

export default App;
