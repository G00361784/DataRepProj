import { useEffect, useState } from "react";
import axios from 'axios';
import Employees from './employees';

function Read() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/employees');
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Check if data is defined before accessing length */}
      {data && data.length > 0 ? ( 
        <Employees allEmployees={data} />
      ) : (
        <p>Loading employees...</p>
      )}
    </div>
  );
}

export default Read;