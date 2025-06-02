import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CharacterContainer from "./components/Character/CharacterContainer";

function App() {
  const [inputSearch, setInputSearch] = useState("");

  const handleSearch = (input) => {
    setInputSearch(input);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <CharacterContainer input={inputSearch} />
    </>
  );
}

export default App;
