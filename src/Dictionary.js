import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Searching for the word "${keyword}"...`);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <form className="text-center" onSubmit={search}>
      <input type="search" placeholder="Type a word..." onChange={handleKeyword}></input>
      <input type="submit" value="Search"></input>
    </form>
  );
}