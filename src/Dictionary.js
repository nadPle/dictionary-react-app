import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(keyword);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>WORD BOOK</h1>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type in a word"
          onChange={handleKeywordChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
