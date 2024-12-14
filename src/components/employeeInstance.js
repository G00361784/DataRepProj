import { useEffect } from 'react';
import Card from 'react-bootstrap/Card'; 

function EmployeeInstance(props) {
  useEffect(() => {
    console.log("Employee Item:", props.myEmployee);
  }, [props.myEmployee]);

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