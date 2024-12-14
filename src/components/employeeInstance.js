import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function EmployeeInstance(props) {
  // Log the employee data received through props whenever it changes
  useEffect(() => {
    console.log("Employee Item:", props.myEmployee);
  }, [props.myEmployee]);

  // If no employee data is provided, don't render anything
  if (!props.myEmployee) {
    return null;
  }

  // Function to handle deleting an employee
  const handleDelete = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    axios.delete('http://localhost:4000/api/employees/' + props.myEmployee._id) // Send DELETE request to API
      .then(() => {
        props.Reload(); // Call the Reload function passed as a prop (to refresh employee list)
      })
      .catch((error) => {
        console.error("Error deleting employee:", error); // Log any errors during deletion
      });
  };

  // Render the employee information in a Card component
  return (
    <Card> 
      <Card.Body>
        <Card.Title>{props.myEmployee.name}</Card.Title> {/* Employee name */}
        <Card.Text>
          <strong>Position:</strong> {props.myEmployee.position}<br /> {/* Employee position */}
          <strong>Department:</strong> {props.myEmployee.department} {/* Employee department */}
        </Card.Text>
        <Link to={"/editEmployee/" + props.myEmployee._id} className="btn btn-primary me-2"> {/* Link to edit employee */}
          Edit
        </Link>
        <Button variant="danger" onClick={handleDelete}>Delete</Button> {/* Button to delete employee */}
      </Card.Body>
    </Card>
  );
}

export default EmployeeInstance;