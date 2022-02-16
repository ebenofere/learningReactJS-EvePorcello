import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const lakeList = [
  "Lake Victoria",
  "Lake Malawi",
  "Lake Michigan",
  "Lake Ontario",
  "Lake Tahoe",
  "Great Bear Lake",
];

function App({ lakes }) {
  console.log(lakes);
  return (
    <ul>
      {lakes.map((a) => (
        <li>{a}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(<App lakes={lakeList} />, document.getElementById("root"));
