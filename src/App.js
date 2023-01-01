import "./styles.css";
import "react-bootstrap";
import { useState } from "react";

const App = () => {
  const [colr, setColor] = useState("#e3c301");

  const change = () => {
    const randomColor = "#" + Math.random().toString(16).slice(2, 8);
    setColor(randomColor);
    console.log(setColor);
  };

  return (
    <div className="App" style={{ backgroundColor: `${colr}` }}>
      <h1>Random Background Color Generator</h1>
      <h3>Click on the button to generate a color</h3>
      <button id="btno" className="btn btn-success" onClick={change}>
        Click Me
      </button>
      <p>{colr}</p>
    </div>
  );
};
export default App;
