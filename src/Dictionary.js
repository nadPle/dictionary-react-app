import React, { useState } from "react";

import Results from "./Results";

import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "491037f95bt62c7eo1c6b568c53adb94";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
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
      <Results results={results} />
    </div>
  );
}
