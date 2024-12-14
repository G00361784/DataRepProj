import React from 'react';
import EmployeeInstance from './employeeInstance';

function Employees(props) {
  // Check if props.allEmployees is defined before mapping
  if (!props.allEmployees) {
    return null; 
  }

  return (
    <div>
      {props.allEmployees.map((employee) => (
        <EmployeeInstance 
          myEmployee={employee} 
          key={employee.EmployeeID || employee._id} // Use _id if EmployeeID is not present
        />
      ))}
    </div>
  );
}

export default Employees;