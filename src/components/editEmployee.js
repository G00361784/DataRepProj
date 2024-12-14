import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function EditEmployee() { 
  let { id } = useParams();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [employeeId, setEmployeeId] = useState(""); 
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/api/employees/' + id) 
      .then((response) => {
        setName(response.data.name);
        setPosition(response.data.position);
        setDepartment(response.data.department);
        setEmployeeId(response.data.employeeId);
        setImage(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedEmployee = { 
      name, 
      position, 
      department, 
      employeeId, 
      image 
    };

    axios.put('http://localhost:4000/api/employees/' + id, updatedEmployee) 
      .then((res) => {
        console.log(res.data);
        navigate('/read'); 
      });
  }

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