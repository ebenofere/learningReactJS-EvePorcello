import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hello() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>Let's build something cool.</p>
    </div>
  );
}

ReactDOM.render(<Hello />, document.getElementById("root"));

// When we are designing React applications for real, we start creating user interfaces with collections of React elements called "components". A component lets you put together a user interface with independent reusable pieces. A component is a function that returns some UI.

// For JSX, a component needs to be capitalized always.
