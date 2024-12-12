// Employees.js
import React from 'react';
import Read from './read';
import EmployeeInstance from './employeeInstance';

function Employees(props) {
  return props.allEmployees.map((employee) => (
    <EmployeeInstance myEmployee={employee} key={employee.EmployeeID} />
  ));
}


export default Employees;