import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    const meaningsToShow = props.results.meanings.slice(0, 3);

    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <h3>/ {props.results.phonetic} /</h3>
        {meaningsToShow.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
