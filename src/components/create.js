import React from 'react';
import { useState } from 'react';

const Create = () => {
  const [employeeName, setEmployeeName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(employeeName);
    // You would typically make an API call here to send the data to your backend
  };

  return (
    <div>
      <h2>Add New Employee</h2> {/* Added a title */}
      <form onSubmit={handleSubmit}> {/* Added a form element */}
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