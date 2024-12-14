import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
  // Initialize state variables to store employee data
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [image, setImage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create a new employee object with the data from the form fields
    const newEmployee = {
      name: name,
      position: position,
      department: department,
      employeeId: employeeId,
      image: image
    };

    try {
      // Send a POST request to the API to create the new employee
      const res = await axios.post('http://localhost:4000/api/employees', newEmployee);
      console.log(res.data); // Log the response data from the API

      // Clear the form fields after successful submission
      setName('');
      setPosition('');
      setDepartment('');
      setEmployeeId('');
      setImage('');
    } catch (err) {
      console.error(err); // Log any errors that occur during the API call
    }
  };

  // Render the form for creating a new employee
  return (
    <div>
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}> {/* Form for creating a new employee */}
        <div className="form-group"> {/* Form group for name input */}
          <label htmlFor="name">Name:</label> {/* Label for name input */}
          <input
            type="text" // Input type is text
            id="name" // Unique ID for the name input
            className="form-control" // CSS class for styling
            value={name} // Bind the input value to the name state variable
            onChange={(e) => setName(e.target.value)} // Update name state when input changes
          />
        </div>
        {/* Similar form groups for position, department, employeeId, and image */}
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            id="position"
            className="form-control"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            className="form-control"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="employeeId">Employee ID:</label>
          <input
            type="text"
            id="employeeId"
            className="form-control"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary"> {/* Submit button */}
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default Create; // Export the Create component