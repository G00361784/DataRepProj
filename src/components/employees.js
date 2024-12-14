import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeInstance from './employeeInstance';
import SearchBar from './searchBar';

function Employees() {
  const [employees, setEmployees] = useState([]); // State to store all employees
  const [filteredEmployees, setFilteredEmployees] = useState([]); // State to store filtered employees
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search term

  // Function to fetch employee data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/employees'); // Get employee data
      // Sort the employees alphabetically by name
      const sortedEmployees = [...response.data].sort((a, b) => a.name.localeCompare(b.name));
      setEmployees(sortedEmployees); // Update the employees state
      setFilteredEmployees(sortedEmployees); // Update the filtered employees state
    } catch (error) {
      console.error("Error fetching data:", error); // Log any errors
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData(); 
  }, []);

  // Function to reload employee data (called by child component)
  const handleReload = () => {
    fetchData(); 
  };

  // Function to handle search input changes
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase(); // Get the search term and convert to lowercase
    setSearchTerm(searchTerm); // Update the search term state

    // Filter employees based on the search term
    const filtered = employees.filter((employee) => {
      // Check if name, position, or department includes the search term (case-insensitive)
      return (
        employee.name.toLowerCase().includes(searchTerm) ||
        employee.position.toLowerCase().includes(searchTerm) ||
        employee.department.toLowerCase().includes(searchTerm)
      );
    });
    setFilteredEmployees(filtered); // Update the filtered employees state
  };

  // If employees data is not yet loaded, return null
  if (!employees) {
    return null; 
  }

  // Render the component
  return (
    <div className="container mt-5"> {/* Container for the employee list */}
      <h1 className="mb-4">Employee List</h1> {/* Heading for the employee list */}
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} /> {/* Search bar component */}

      <div className="row"> {/* Row for grid layout */}
        {/* Map through the filtered employees and render EmployeeInstance components */}
        {filteredEmployees.map((employee) => (
          <div className="col-md-4 mb-4" key={employee._id}> {/* Column for each employee */}
            <EmployeeInstance
              myEmployee={employee} // Pass employee data to the child component
              Reload={handleReload} // Pass the reload function to the child component
            />
          </div>
        ))}
      </div>
    </div>
  );
}


export default Employees;
