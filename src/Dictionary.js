import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";
import Photos from "./Photos.js";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }  

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f9170000100000150a5645bd3a449cb8909f4cde3acd62a";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
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
        <hr />
        <Photos photos={photos} />
      </section>
    );
  } else {
    load()
    return "Loading...";
  }
}