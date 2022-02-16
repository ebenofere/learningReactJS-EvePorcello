import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  useEffect(() => {
    console.log(`field 1: ${val}`);
  }, [val]);

  useEffect(() => {
    console.log(`field 2: ${val2}`);
  }, [val2]);

  return (
    <>
      <label>
        Favourite Phrase:
        <input value={val} onChange={(e) => setVal(e.target.value)} />
      </label>
      <br />
      <label>
        Second Favourite Phrase:
        <input value={val2} onChange={(e) => setVal2(e.target.value)} />
      </label>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// "useEffect" allows us to perform side effects inside of our function components

// The things that we want the component to do other than return UI are called "effects". So, an alert, a console log, any sort of interaction with the browser or a native API is not part of the render, it's not part of the "return", so we can use these "useEffect" hooks to do all sorts of cool things.

// The "dependency array" is a really important part of working with React hooks. It's going to allow for smart rendering so we won't trigger unnecessary re-renders if we pass the right values to that array.
