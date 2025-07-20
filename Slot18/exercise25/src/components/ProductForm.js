//components/ProductForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/productSlice';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    catalogs: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({
      ...product,
      price: parseFloat(product.price),
      catalogs: product.catalogs.split(',').map((item) => item.trim()),
    }));
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Thêm sản phẩm</h2>
      <form onSubmit={handleSubmit}>
        <input name="id" placeholder="ID" onChange={handleChange} className="form-control mb-2" />
        <input name="name" placeholder="Tên" onChange={handleChange} className="form-control mb-2" />
        <input name="price" placeholder="Giá" onChange={handleChange} className="form-control mb-2" />
        <input name="description" placeholder="Mô tả" onChange={handleChange} className="form-control mb-2" />
        <input name="catalogs" placeholder="Catalogs (cách nhau bằng dấu ,)" onChange={handleChange} className="form-control mb-2" />
        <button type="submit" className="btn btn-primary">Thêm</button>
      </form>
    </div>
  );
};

export default ProductForm;
