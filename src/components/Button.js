import React from "react";
import "../Css/Button.css";

export default function Button(props) {
  return <button onClick={props.callApi}>Click to generate joke</button>;
}
