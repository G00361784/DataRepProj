const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors()); // Use cors() middleware

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  department: String,
  employeeId: String, 
  image: String 
});

const Employee = mongoose.model('Employee', employeeSchema);

mongoose.connect('mongodb+srv://admin:admin@cluster0.8hpxw.mongodb.net/');


app.get('/', (req, res) => {
    res.send('G00361784');
});
app.get('/name', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
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


app.post('/api/employees', async (req, res) => {
  const { name, position, department, employeeId, image } = req.body;

  const newEmployee = new Employee({ name, position, department, employeeId, image });
  await newEmployee.save();

  res.status(201).json({ message: 'Employee created successfully', employee: newEmployee });
});
