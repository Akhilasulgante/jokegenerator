import React, { useState } from "react";
import Button from "./Button.js";
import "../Css/Jokes.css";

export default function Jokes() {
  const [Jokes, setJokes] = useState("");

  const fectApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      // Why is it joke and not jokes, it is because of APi
      .then((data) => setJokes(data.joke));
  };

  return (
    <div className="jokes">
      <Button callApi={fectApi} />
      <p>{Jokes}</p>
    </div>
  );
}
