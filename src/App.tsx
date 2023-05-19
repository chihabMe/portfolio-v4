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
    <div className="w-full max-w-screen-sm mx-auto flex flex-col gap-2 text-center">
      <input value={value} />
      <div className="flex gap-2">
        <button
          onClick={increase}
          className="bg-blue-400 px-6 py-2 rounded-md hover:ring-2 hover:ring-blue-400 active:ring-1 cursor-pointer text-xs text-white  font-bold"
        >
          +
        </button>
        <button
          onClick={decrease}
          className="bg-blue-400 px-6 py-2 rounded-md hover:ring-2 hover:ring-blue-400 active:ring-1 cursor-pointer text-xs text-white  font-bold"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
