import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    console.log(counter);
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Cha and code</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value: {counter}</button>
    </>
  );
}

export default App;
