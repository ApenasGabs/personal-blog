import { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container">
      <h1 className="">Home</h1>
      <p>voce clicou {counter}x</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Click me </button>
    </div>
  );
};

export default Home;
