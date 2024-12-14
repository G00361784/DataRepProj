const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json()); // Use express.json() for parsing JSON data


const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
const mongoose = require('mongoose');

// Mongoose schema and model
const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  department: String,
  employeeId: String,
  image: String
});

const Employee = mongoose.model('Employee', employeeSchema);

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:admin@cluster0.8hpxw.mongodb.net/')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.get('/', (req, res) => {
  res.send('G00361784');
});

app.get('/api/employees/:id', async (req, res) => {
  try {
    let employee = await Employee.findById(req.params.id); 
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put('/api/employees/:id', async (req, res) => {
  try {
    let employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee); 
  } catch (err) {
    res.status(400).json({ message: err.message }); 
  }
});

// Get all employees from the database
app.get('/api/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new employee
app.post('/api/employees', async (req, res) => {
  try {
    const { name, position, department, employeeId, image } = req.body;

    const newEmployee = new Employee({ name, position, department, employeeId, image });
    await newEmployee.save();

    res.status(201).json({ message: 'Employee created successfully', employee: newEmployee });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(400).json({ message: err.message }); 
  }
});
app.delete('/api/employees/:id', async (req, res) => {
  try {
    console.log('Deleting employee with ID:', req.params.id);
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json({ message: "Employee deleted successfully", employee });
  } catch (err) {
    console.error("Error deleting employee:", err); // Log the error for debugging
    res.status(500).json({ message: 'Failed to delete employee' });
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});