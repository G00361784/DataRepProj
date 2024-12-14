import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEmployee = {
      name: name,
      position: position,
      department: department,
      employeeId: employeeId,
      image: image
    };

    try {
      const res = await axios.post('http://localhost:4000/api/employees', newEmployee);
      console.log(res.data); // Log the success response 

      // Optionally clear the form fields after successful submission
      setName('');
      setPosition('');
      setDepartment('');
      setEmployeeId('');
      setImage(''); 
    } catch (err) {
      console.error(err); // Log any errors that occur
    }
  };

  return (
    <div>
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <button type="submit" className="btn btn-primary">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default Create;