import React from "react";

export default function Results(props) {
  if (props.results) {
    return <div className="Results">Definition: {props.results}</div>;
  } else {
    return null;
  }
}
