import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);

  }  
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
  <div>
    <form className="text-center" onSubmit={search}>
      <input type="search" placeholder="Type a word..." onChange={handleKeyword}></input>
      <input type="submit" value="Search"></input>
    </form>
    <Results results={results} />
  </div>
  );
}