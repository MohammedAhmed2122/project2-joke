import React, { useState } from "react";

const Joke = ({ joke }) => {
  const [showPunchline, setShowPunchline] = useState(false);

  const togglePunchline = () => {
    setShowPunchline(!showPunchline);
  };

  return (
    <div className="joke">
      <p>{joke.setup}</p>
      <button onClick={togglePunchline}>
        {showPunchline ? "Hide Punchline" : "Show Punchline"}
      </button>
      {showPunchline && <p>{joke.punchline}</p>}
    </div>
  );
};

export default Joke;
