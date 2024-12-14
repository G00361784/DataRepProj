import React, { useState } from 'react';
import axios from 'axios'; // Assuming you have axios installed

const Create = () => {
  // Employee State
  const [employeeName, setEmployeeName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Employee Data
    console.log(employeeName);
    // Send employee data to your API (replace with your actual API endpoint)
    axios.post('http://localhost:4000/api/employees', { name: employeeName }) 
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Add New Employee</h2> 

      <form onSubmit={handleSubmit}>
        {/* Employee Input */}
        <div className="form-group">
          <label htmlFor="employeeName">Employee Name:</label>
          <input
            type="text"
            id="employeeName"
            className="form-control"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default Create;