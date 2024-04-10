import { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <h1>Home</h1>
      <img className="w-1/2" src="https://github.com/Apenasgabs.png" alt="" />
      <p>voce clicou {counter}x</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Click me </button>
    </div>
  );
};

export default Home;
