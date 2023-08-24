import React, { useState, useEffect } from "react";
import Joke from "./components/Joke";
import NextButton from "./components/Button";
import "./styles.css";

function App() {
  const [joke, setJoke] = useState(null);

  const fetchJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => setJoke(data));
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Joke of the Day</h1>
        {joke && <Joke joke={joke} />}
        <NextButton onClick={fetchJoke} />
      </header>
    </div>
  );
}

export default App;
