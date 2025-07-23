//src/components/ProductForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductForm({ products, setProducts }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    currentPrice: ''
  });
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    currentPrice: ''
  });

  const handleNewChange = (e) => {
    setNewProduct(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newItem = {
      ...newProduct,
      id: String(products.length + 1),
      image: 'default.png'
    };
    setProducts([...products, newItem]);
    setNewProduct({ id: '', name: '', description: '', price: '', currentPrice: '' });
  };

  const handleEditClick = (product) => {
    setFormData(product);
    setEditingId(product.id);
  };

  const handleEditChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = () => {
    const updated = products.map(p =>
      p.id === editingId ? { ...p, ...formData } : p
    );
    setProducts(updated);
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="container py-4">
      {/* Form thêm sản phẩm */}
      <h3 className="text-center mb-3">Add Product</h3>
      <form onSubmit={handleAdd} className="mb-4">
        <div className="row g-2">
          <div className="col-md-3">
            <input className="form-control" name="name" placeholder="Name" value={newProduct.name} onChange={handleNewChange} required />
          </div>
          <div className="col-md-3">
            <input className="form-control" name="description" placeholder="Description" value={newProduct.description} onChange={handleNewChange} required />
          </div>
          <div className="col-md-2">
            <input className="form-control" name="price" placeholder="Price" value={newProduct.price} onChange={handleNewChange} required />
          </div>
          <div className="col-md-2">
            <input className="form-control" name="currentPrice" placeholder="Current Price" value={newProduct.currentPrice} onChange={handleNewChange} required />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary w-100">Add Product</button>
          </div>
        </div>
      </form>

      {/* Bảng sản phẩm */}
      <h4 className="text-center mb-3">Product List</h4>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Current Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td><del>{item.price} đ</del></td>
              <td className="text-danger">{item.currentPrice} đ</td>
              <td>
                <button className="btn btn-sm btn-danger me-2" onClick={() => handleDelete(item.id)}>Delete</button>
                <button className="btn btn-sm btn-warning" onClick={() => handleEditClick(item)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form Edit riêng bên dưới */}
      {editingId && (
        <div className="mt-5">
          <h4 className="text-center mb-3">Edit Product</h4>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input className="form-control" name="name" value={formData.name} onChange={handleEditChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea className="form-control" name="description" rows="3" value={formData.description} onChange={handleEditChange}></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Price:</label>
            <input className="form-control" name="price" value={formData.price} onChange={handleEditChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Current Price:</label>
            <input className="form-control" name="currentPrice" value={formData.currentPrice} onChange={handleEditChange} />
          </div>
          <div className="text-end">
            <button className="btn btn-secondary me-2" onClick={() => setEditingId(null)}>Back Home</button>
            <button className="btn btn-danger" onClick={handleUpdate}>Save Product</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductForm;
