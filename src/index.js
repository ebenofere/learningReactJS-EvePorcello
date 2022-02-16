import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Lake() {
  return (
    <div>
      <h1>Visit Lake Michigan!</h1>
    </div>
  );
}

function SkiResort() {
  return (
    <div>
      <h1>Visit Honolulu Beach!</h1>
    </div>
  );
}

function App() {
  return (
    <>
      <Lake />
      <SkiResort />
    </> // --------- React Fragment
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
