import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const increase = () => {
    setValue((prev) => prev + 1);
  };
  const decrease = () => {
    setValue((prev) => prev - 1);
  };
  return (
    <div className="">
      <input value={value} />
      <button onClick={increase}>
        +
      </button>
      <button onClick={decrease}>
        -
      </button>
    </div>
  );
}

export default App;
