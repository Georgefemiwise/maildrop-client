

import { useState, useEffect } from "react";
import axios from "axios";



interface FetchDataResult {
  data: Student[] | null;
  error: Error | null;
}

export default function fetchData(): FetchDataResult {
  const [data, setData] = useState<Student[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  // API endpoint
  const apiUrl = "http://127.0.0.1:8000/api/students/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request using Axios
        const response = await axios.get<Student[]>(apiUrl); // Specify the expected response type

        // Check if the response is successful (status code in the range 200-299)
        if (response.status >= 200 && response.status < 300) {
          // Handle the data
          setData(response.data);
          console.log("Data received:", response.data);
          // Perform further actions with the data here
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error: any) {
        setError(error);
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return { data, error };
}
