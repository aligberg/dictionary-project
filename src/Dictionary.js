import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);

  }  
  function search(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <section>
        <form id="search" onSubmit={handleSubmit}>
          <div className="row search-bar">
            <div className="text-center col-10 bar">
              <input className="form-control search" type="search" placeholder="Type a word..." onChange={handleKeyword} autoFocus={false}></input>
            </div>
            <div className="col-2">
              <button className="btn btn-outline-secondary searchButton" type="submit">Search</button>
            </div>
          </div>
        </form>
        <Results results={results} />
      </section>
    );
  } else {
    load()
    return "Loading...";
  }
}