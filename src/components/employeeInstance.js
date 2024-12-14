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
    <div>
      <Card>
        <Card.Header>{props.myEmployee.name}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myEmployee.image} alt={props.myEmployee.name} />
            <footer>
              Position: {props.myEmployee.position}<br />
              Department: {props.myEmployee.department}
            </footer>
          </blockquote>
          <Link to={"/editEmployee/" + props.myEmployee._id} className="btn btn-primary">
            Edit
          </Link>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EmployeeInstance;