import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function EditEmployee() { // Define the EditEmployee component
  let { id } = useParams(); // Get the employee ID from the URL parameters
  // Initialize state variables for employee data
  const [name, setName] = useState(""); 
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Fetch employee data when the component mounts or the ID changes
  useEffect(() => {
    axios.get('http://localhost:4000/api/employees/' + id) // Send GET request to API
      .then((response) => {
        // Update state variables with the fetched employee data
        setName(response.data.name);
        setPosition(response.data.position);
        setDepartment(response.data.department);
        setEmployeeId(response.data.employeeId);
        setImage(response.data.image);
      })
      .catch((error) => {
        console.log(error); // Log any errors during data fetching
      });
  }, [id]); // Dependency array ensures the effect runs when the ID changes

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Create an updated employee object with the current state values
    const updatedEmployee = { 
      name, 
      position, 
      department, 
      employeeId, 
      image 
    };

    // Send PUT request to API to update the employee data
    axios.put('http://localhost:4000/api/employees/' + id, updatedEmployee) 
      .then((res) => {
        console.log(res.data); // Log the response data from the API
        navigate('/read'); // Navigate to the /read route after successful update
      });
  }

  // Render the form for editing employee details
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee Name: </label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        
        <div className="form-group">
          <label>Position: </label>
          <input 
            type="text" 
            className="form-control" 
            value={position} 
            onChange={(e) => setPosition(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Department: </label>
          <input 
            type="text" 
            className="form-control" 
            value={department} 
            onChange={(e) => setDepartment(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Employee ID: </label> 
          <input 
            type="text" 
            className="form-control" 
            value={employeeId} 
            onChange={(e) => setEmployeeId(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Image URL: </label>
          <input 
            type="text" 
            className="form-control" 
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Edit Employee" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}