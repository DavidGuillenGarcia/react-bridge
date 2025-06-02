import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputText, setInputText] = useState("");

  const newSearch = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
    onSearch(newValue);
  };
  return (
    <div className="searchbar">
      <input
        id="outlined-basic"
        label="Search a Pokemon"
        variant="outlined"
        className="form-control-lg"
        color="secondary"
        placeholder="Search a character"
        value={inputText}
        onChange={newSearch}
      />
    </div>
  );
};

export default SearchBar;
