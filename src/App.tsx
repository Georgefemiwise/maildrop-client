import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">

        <h1 className="">Maildrop client</h1>
        <button className="btn" onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
      </div>
    </>
  );
}

export default App;
