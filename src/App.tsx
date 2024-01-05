import { useEffect, useState } from "react";
import StudentBarChart from "./components/charts/studendBarChart";
import StudentLineChart from "./components/charts/studentLineChart";
import fetchtData from "./components/utils";

function App() {
  const { data } = fetchtData();

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex lg:flex-row flex-col gap-3 p-24 justify-center items-center h-screen">
        <div className="card w-full bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Grand total student Programs</h2>
            <StudentBarChart studentData={data} />
          </div>
        </div>
        <div className="card skeleton w-full h-[500px] bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title skeleton"></h2>
            <StudentLineChart studentData={data} />
          </div>
        </div>
        <div className="card w-full bg-neutral h-[500px] skeleton text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title"></h2>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
