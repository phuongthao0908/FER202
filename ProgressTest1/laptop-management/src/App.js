import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import LaptopList from './components/LaptopList';
import LaptopDetail from './components/LaptopDetail';
import NotFound from './components/NotFound';

function App() {
  const [user, setUser] = useState(null);  // Quản lý trạng thái user

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/login" 
            element={user ? <Navigate to="/laptops" /> : <Login setUser={setUser} />}
          />
          <Route 
            path="/laptops" 
            element={user ? <LaptopList user={user} /> : <Navigate to="/login" />}
          />
          <Route 
            path="/laptops/:id" 
            element={user ? <LaptopDetail /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
