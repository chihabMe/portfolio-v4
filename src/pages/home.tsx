import { useState } from "react";
const HomePage = () => {
  const [value, setValue] = useState(0);
  const increase = () => {
    setValue((prev) => prev + 1);
  };
  const decrease = () => {
    setValue((prev) => prev - 1);
  };
  return (
    <div>
      <input value={value} />
      <button onClick={increase}>
        +
      </button>
      <button onClick={decrease}>
        -
      </button>
    </div>
  );
};

export default HomePage;
