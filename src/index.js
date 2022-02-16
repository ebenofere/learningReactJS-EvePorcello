import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [year, setYear] = useState(2020);
  const [manager, setManager] = useState("Alex");
  const [status, setStatus] = useState("Open");

  return (
    <>
      <div>
        <h1>{year}</h1>
        <button onClick={() => setYear(year + 1)}>Add +</button>
      </div>

      <div>
        <h1>Manager on Duty: {manager}</h1>
        <button onClick={() => setManager("Rachel")}>Change</button>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
