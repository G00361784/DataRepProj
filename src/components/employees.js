import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeInstance from './employeeInstance';
import SearchBar from './searchBar';

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/employees');
      const sortedEmployees = [...response.data].sort((a, b) =>
        a.name.localeCompare(b.name)
      ); 
      setEmployees(sortedEmployees);
      setFilteredEmployees(sortedEmployees);
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

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filtered = employees.filter((employee) => {
      return (
        employee.name.toLowerCase().includes(searchTerm) ||
        employee.position.toLowerCase().includes(searchTerm) ||
        employee.department.toLowerCase().includes(searchTerm)
      );
    });
    setFilteredEmployees(filtered);
  };

  if (!employees) {
    return null;
  }

  return (
    <div className="container mt-5"> {/* Added container and margin-top */}
      <h1 className="mb-4">Employee List</h1> {/* Added heading */}
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

      <div className="row"> {/* Added row for grid layout */}
        {filteredEmployees.map((employee) => (
          <div className="col-md-4 mb-4" key={employee._id}> {/* Added column and margin-bottom */}
            <EmployeeInstance
              myEmployee={employee}
              Reload={handleReload}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Employees;
