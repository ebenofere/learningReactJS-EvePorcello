import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Checkbox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
}

ReactDOM.render(<Checkbox />, document.getElementById("root"));

// "useEffect" allows us to perform side effects inside of our function components

// The things that we want the component to do other than return UI are called "effects". So, an alert, a console log, any sort of interaction with the browser or a native API is not part of the render, it's not part of the "return", so we can use these "useEffect" hooks to do all sorts of cool things.

// The "dependency array" is a really important part of working with React hooks. It's going to allow for smart rendering so we won't trigger unnecessary re-renders if we pass the right values to that array.

// Another way to use the "useEffect" hook is to fetch some data

// The function of a "useReducer" is that it takes in the current state, and it returns a new state
