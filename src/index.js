import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// function Slogan(props) {
//   // console.log(props);
//   console.log(Object.keys(props), "number of keys");
//   return (
//     <div>
//       <h1>Welcome to {props.club}</h1>
//       <p>{props.message}</p>
//       <p>{props.position}</p>
//     </div>
//   );
// }

function Slogan({ club, message, position }) {
  return (
    <div>
      <h1>Welcome to {club}</h1>
      <p>{message}</p>
      <p>{position}</p>
    </div>
  );
}

ReactDOM.render(
  <Slogan club="Liverpool" message="You will never walk alone!" position={3} />,
  document.getElementById("root")
);

// Props, or properties, is an object in React that contains properties about the component. With props, we can display dynamic data within a component.
