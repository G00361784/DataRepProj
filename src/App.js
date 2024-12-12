
import './App.css';
import Header1 from './components/header1';
import Create from './components/create';
import EmployeeInstance from './components/employeeInstance';
import Read from './components/read';
function App() {
  return (
    <div>
      <Header1></Header1>
      <Create></Create>
      <EmployeeInstance></EmployeeInstance>
      <Read/>
    </div>
  );
}

export default App;
