import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const lakeList = [
  { id: 1, name: "Lake Victoria", country: "Uganda, Tanzania, Kenya" },
  { id: 2, name: "Lake Malawi", country: "Malawi" },
  { id: 3, name: "Lake Michigan", country: "United States of America" },
  { id: 4, name: "Lake Ontario", country: "Canada" },
  { id: 5, name: "Lake Tahoe", country: "United States of America" },
  { id: 6, name: "Great Bear Lake", country: "Canada" },
];

function App({ lakes }) {
  console.log(lakes);
  return (
    <div>
      {lakes.map((lake) => (
        <div key={lake.id}>
          <h2>{lake.name}</h2>
          <p>This lake is located in {lake.country}</p>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<App lakes={lakeList} />, document.getElementById("root"));
