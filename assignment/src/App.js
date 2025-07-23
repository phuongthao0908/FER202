//src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm'; 
import Login from './components/Login';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

function App() {
  const [role, setRole] = useState(null);
  const [products, setProducts] = useState([]);

  return (
    <Router>
      <Navbar role={role} setRole={setRole} />
      <Routes>


        <Route
          path="/"
          element={
            role === 'user' ? (
              <ProductList role={role} products={products} setProducts={setProducts} />
            ) : role === 'admin' ? (
              <Navigate to="/add" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

  
        <Route
          path="/add"
          element={
            role === 'admin' ? (
              <ProductForm products={products} setProducts={setProducts} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />


        <Route path="/login" element={<Login setRole={setRole} />} />


        <Route
          path="/product/:id"
          element={<ProductDetail products={products} />}
        />

        <Route
          path="/cart"
          element={
            role === 'user' ? <Cart /> : <Navigate to="/login" replace />
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
