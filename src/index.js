import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Lake({ name }) {
  return (
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}

function SkiResort({ name }) {
  return (
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}

// function App(props) {
//   if (props.season === "summer") {
//     return <Lake name="Oniru Beach" />;
//   } else if (props.season === "winter") {
//     return <SkiResort name="Erin-Ijesha Waterfall" />;
//   }
// }

// function App(props) {
//   return (
//     <div>
//       {props.season === "summer" ? (
//         <Lake name="Oniru Beach" />
//       ) : (
//         <SkiResort name="Erin-Ijesha Waterfall" />
//       )}
//     </div>
//   );
// }

function App(props) {
  return (
    <div>
      {props.season === "summer" ? (
        <Lake name="Oniru Beach" />
      ) : props.season === "winter" ? (
        <SkiResort name="Erin-Ijesha Waterfall" />
      ) : (
        <h1>Come back in the winter or summer!</h1>
      )}
    </div>
  );
}

ReactDOM.render(<App season="summer" />, document.getElementById("root"));
