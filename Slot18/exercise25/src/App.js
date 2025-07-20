//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="mb-4 d-flex gap-2">
          <NavLink to="/" className={({ isActive }) => `btn ${isActive ? 'btn-primary' : 'btn-outline-primary'}`}>Danh sách SP</NavLink>
          <NavLink to="/cart" className={({ isActive }) => `btn ${isActive ? 'btn-success' : 'btn-outline-success'}`}>Giỏ hàng</NavLink>
          <NavLink to="/add" className={({ isActive }) => `btn ${isActive ? 'btn-info text-white' : 'btn-outline-info'}`}>Thêm SP</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add" element={<ProductForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;