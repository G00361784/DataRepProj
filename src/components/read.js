import { useEffect, useState } from "react";
import Employees from './employees';

function Read() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData([
          {
            "Name": "John Doe",
            "Position": "Software Engineer",
            "Department": "Technology",
            "EmployeeID": "12345",
            "Image": "https://example.com/images/john_doe.jpg" 
          },
          {
            "Name": "Jane Smith",
            "Position": "Data Analyst",
            "Department": "Analytics",
            "EmployeeID": "67890",
            "Image": "https://example.com/images/jane_smith.jpg" 
          },
          {
            "Name": "Peter Jones",
            "Position": "Project Manager",
            "Department": "Management",
            "EmployeeID": "54321",
            "Image": "https://example.com/images/peter_jones.jpg" 
          }
        ]); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Conditionally render Employees only when data is available */}
      {data.length > 0 ? ( 
        <Employees allEmployees={data} /> 
      ) : (
        <p>Loading employees...</p> // Or a loading spinner
      )}
    </div>
  );
}

export default Read;