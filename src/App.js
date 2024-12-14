import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Header1 from './components/header1';
import Create from './components/create';
import Read from './components/read';
import EditEmployee from './components/editEmployee';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/homepage';
function App() {
  return (
    <BrowserRouter> 
      <div>
        <Header1 />
        <Routes> 
          <Route path="/create" element={<Create />} /> 
          <Route path="/read" element={<Read />} /> 
          <Route path="/editEmployee/:id" element={<EditEmployee />} /> 
          <Route path="/homepage" element={<HomePage />} /> 

          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;