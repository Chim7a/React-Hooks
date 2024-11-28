import { useState, useEffect } from "react";
import "./App.css";
import Example from "./Example";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const fetchProducts = () => {
    alert("Product gotten successfully");
  };

  // useEffect prevents fetchProducts or any function from constantly updating the dom when a state has been updated.
  // The dependency array is empty when we want to prevent all functions from running when state has been updated.
  // TO update a run the function when state has been updated, add the name of the state in the array dependency
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {/* This && means it takes only one option to show when count is greater than 5 */}
      {count > 5 && <p>You Won</p>}
      {/* This will display the example component if count is greater than 5 */}
      {count > 5 ? <Example /> : <p>Keep going</p>}

      <h1>{name}</h1>
      <input
        disabled={name === "chima" ? true : false}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
