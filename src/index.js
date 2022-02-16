import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Checkbox() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });
  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
}

ReactDOM.render(<Checkbox />, document.getElementById("root"));

// "useEffect" allows us to perform side effects inside of our function components

// The things that we want the component to do other than return UI are called "effects". So, an alert, a console log, any sort of interaction with the browser or a native API is not part of the render, it's not part of the "return", so we can use these "useEffect" hooks to do all sorts of cool things.
