import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// ReactDOM.render takes in two arguments. The first argument is the name of the element that we want to create, and the second is where we want to render that element.

// React.createElement takes in three arguments. The first is the name of the tag that we want to create. The second is any properties that we want this element to have. And then the third is any children

ReactDOM.render(
  React.createElement("h1", { style: { color: "red" } }, "Hello!"),
  document.getElementById("root")
);

// When we save this file, we should see "Hello!" being rendered to the browser

// React elements are the building blocks of React applications
