import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Lake({ name }) {
  return <h1>{name}</h1>;
}

function App() {
  return (
    <div>
      <Lake name="Lake Victoria" />
      <Lake name="Lake Malawi" />
      <Lake name="Lake Michigan" />
      <Lake name="Lake Ontario" />
      <Lake name="Lake Tahoe" />
      <Lake name="Great Bear Lake" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// Props, or properties, is an object in React that contains properties about the component. With props, we can display dynamic data within a component.
