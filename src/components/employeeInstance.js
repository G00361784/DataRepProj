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
        <Card.Header>{props.myEmployee.name}</Card.Header> 
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myEmployee.image} alt={props.myEmployee.Name} />
            <footer>
              Position: {props.myEmployee.position}<br /> 
              Department: {props.myEmployee.department} 
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EmployeeInstance;