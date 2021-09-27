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
    <form id="search" onSubmit={search}>
      <div className="row search-bar">
          <div className="text-center col-10 bar">
            <input className="form-control search" type="search" placeholder="Type a word..." onChange={handleKeyword} autoFocus={false}></input>
          </div>
          <div className="col-auto">
            <button className="btn btn-outline-secondary" type="submit">Search</button>
          </div>
        </div>
    </form>
      <Results results={results} /> 
  </div>
  );
}