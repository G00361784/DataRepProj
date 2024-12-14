import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Header1 from './components/header1';
import Create from './components/create';
import Read from './components/read';
import EditEmployee from './components/editEmployee';

function App() {
  return (
    <BrowserRouter> {/* Wrap your app with BrowserRouter */}
      <div>
        <Header1 />

        <Routes> {/* Define your routes */}
          <Route path="/create" element={<Create />} /> 
          <Route path="/read" element={<Read />} /> 
          <Route path="/editEmployee/:id" element={<EditEmployee />} /> 

          {/* You can add more routes here */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;