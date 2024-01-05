import { useState } from "react";

export default function fetchtData() {
  const [data, setData] = useState();
  const [error, setError] = useState();

  //  API endpoint
  const getData = () => {
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
        setData(data);
        console.log("Data received:", data);
        //perform further actions with the data here
      })
      .catch((error) => {
        setError(error);
        console.error("Fetch error:", error);
      });
  };
  return { data, error };
}
