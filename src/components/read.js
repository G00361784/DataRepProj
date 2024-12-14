import { useEffect, useState } from "react";
import axios from 'axios';
import Employees from './employees';

function Read() {
  // Initialize state variable 'data' as an empty array to store employee data
  const [data, setData] = useState([]);

  // UseEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Asynchronous function to fetch data from the API
    const fetchData = async () => {
      try {
        // Send a GET request to the API endpoint
        const response = await axios.get('http://localhost:4000/api/employees');
        // Update the 'data' state variable with the response data
        setData(response.data);
      } catch (error) {
        // Log any errors that occur during data fetching
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Render the component JSX
  return (
    <div>
      {/* Conditionally render the Employees component if data is available */}
      {data && data.length > 0 ? ( 
        <Employees allEmployees={data} /> // Pass the fetched data to the Employees component
      ) : (
        <p>Loading employees...</p> // Display a loading message while data is being fetched
      )}
    </div>
  );
}

export default Read;