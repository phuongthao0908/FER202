// src/components/EditProduct.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditProduct({ products, setProducts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    currentPrice: ''
  });

  useEffect(() => {
    const product = products.find(p => p.id === parseInt(id));
    if (product) {
      setForm({
        name: product.name,
        description: product.description,
        price: product.price,
        currentPrice: product.currentPrice
      });
    }
  }, [id, products]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updatedProducts = products.map(p =>
      p.id === parseInt(id) ? { ...p, ...form } : p
    );
    setProducts(updatedProducts);
    navigate('/');
  };

  return (
    <div className="container py-5 text-white">
      <h3 className="text-center mb-4">Edit Product</h3>

      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input className="form-control" name="name" value={form.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Description:</label>
        <textarea className="form-control" name="description" rows="3" value={form.description} onChange={handleChange}></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Price:</label>
        <input className="form-control" name="price" value={form.price} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Current Price:</label>
        <input className="form-control" name="currentPrice" value={form.currentPrice} onChange={handleChange} />
      </div>

      <button className="btn btn-primary me-2" onClick={() => navigate('/')}>Back Home</button>
      <button className="btn btn-danger" onClick={handleSave}>Save Product</button>
    </div>
  );
}

export default EditProduct;
