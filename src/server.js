const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('G00361784');
});
app.get('/api/employee', (req, res) => {
    const employeeData = [  {
        "Name": "John Doe",
        "Position": "Software Engineer",
        "Department": "Technology",
        "EmployeeID": "12345",
        "Image": "https://example.com/images/john_doe.jpg" 
      },
      {
        "Name": "Jane Smith",
        "Position": "Data Analyst",
        "Department": "Analytics",
        "EmployeeID": "67890",
        "Image": "https://example.com/images/jane_smith.jpg" 
      },
      {
        "Name": "Peter Jones",
        "Position": "Project Manager",
        "Department": "Management",
        "EmployeeID": "54321",
        "Image": "https://example.com/images/peter_jones.jpg" 
      }
    ]
   
    res.json({ employeeData });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/name', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

