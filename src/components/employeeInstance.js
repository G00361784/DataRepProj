import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'; 
import axios from 'axios'; 

function EmployeeInstance(props) {
  useEffect(() => {
    console.log("Employee Item:", props.myEmployee);
  }, [props.myEmployee]);

  if (!props.myEmployee) {
    return null;
  }

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:4000/api/employees/' + props.myEmployee._id)
      .then(() => {
        props.Reload(); 
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  };

  return (
    <Card> {/* Using Card component from React Bootstrap */}
    <Card.Body>
      <Card.Title>{props.myEmployee.name}</Card.Title>
      <Card.Text>
        <strong>Position:</strong> {props.myEmployee.position}<br />
        <strong>Department:</strong> {props.myEmployee.department}
      </Card.Text>
      <Link to={"/editEmployee/" + props.myEmployee._id} className="btn btn-primary me-2"> {/* Added margin-right */}
        Edit
      </Link>
      <Button variant="danger" onClick={handleDelete}>Delete</Button>
    </Card.Body>
  </Card>
  );
}

export default EmployeeInstance;