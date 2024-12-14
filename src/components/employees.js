import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeInstance from './employeeInstance';

function Employees(props) {
  const [employees, setEmployees] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleReload = () => { 
    fetchData();
  };

  if (!employees) {
    return null;
  }

  return (
    <div>
      {employees.map((employee) => (
        <EmployeeInstance
          myEmployee={employee}
          key={employee._id}
          Reload={handleReload} 
        />
      ))}
    </div>
  );
}

export default Employees;