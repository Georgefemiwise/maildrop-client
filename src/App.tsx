import { useEffect, useState } from "react";
import StudentChart from "./components/studendData";

function App() {
  const [data, setdata] = useState();

  //  API endpoint
  const getdata = () => {
    const apiUrl = "http://127.0.0.1:8000/api/students/";

    // Make a GET request using fetch
    fetch(apiUrl)
      .then((response) => {
        // Check if the response is successful (status code in the range 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response as JSON
        return response.json();
      })
      .then((data) => {
        // Handle the data
        setdata(data);
        console.log("Data received:", data);
        //perform further actions with the data here
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className="flex lg:flex-row flex-col gap-3 p-24 justify-center items-center h-screen">
        <div className="card w-full bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Grand total student Programs</h2>
            <StudentChart studentData={data} />
          </div>
        </div>
        <div className="card skeleton w-full h-[500px] bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title skeleton"></h2>
            <p></p>
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
