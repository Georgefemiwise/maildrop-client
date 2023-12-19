import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-4 w-52">
        <div className="flex gap-4 items-center">
          <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
        <div className="skeleton h-32 w-full"></div>

        <div className="skeleton min-h-4 max-w-28"></div>
        <div className="skeleton min-h-4 min-w-full"></div>
        <div className="skeleton min-h-4 min-w-full"></div>
        <p className="capitalize font-thin text-xs text-primary">under development</p>
        
      </div>
    </div>
  );
}

export default App;
