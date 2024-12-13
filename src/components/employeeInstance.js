// EmployeeInstance.js
import { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card'; 
import axios from 'axios';


function EmployeeInstance(props) {

  const [data, setData] = useState([]); // Initialize state to hold the data


  
  useEffect(() => {
    console.log("Employee Item:", props.myEmployee);
  }, [props.myEmployee]);

  // Check if props.myEmployee is defined before accessing its properties
  if (!props.myEmployee) {
    return null; 
  }

  return (
    <div>
      <Card>
        <Card.Header>{props.myEmployee.Name}</Card.Header>
        <Card.Body> 
          <blockquote className="blockquote mb-0">
            <img src={props.myEmployee.Image} alt={props.myEmployee.Name} />
            <footer>
              Position: {props.myEmployee.Position}<br />
              Department: {props.myEmployee.Department}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EmployeeInstance;