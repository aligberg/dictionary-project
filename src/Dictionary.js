import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

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
    <div className="row">
      <form className="text-center my-4" onSubmit={search}>
        <input className="search-bar col-auto py-1" type="search" placeholder="Type a word..." onChange={handleKeyword} autoFocus={false}></input>
        <button className="btn btn-outline-secondary col-auto" type="submit">Search</button>
      </form>
    </div>
    <Results results={results} />
  </div>
  );
}