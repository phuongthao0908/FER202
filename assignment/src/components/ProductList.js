//src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductList({ role, products, setProducts }) {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length === 0) {
      axios.get('/Products.json')
        .then(res => {
          if (res.data && res.data.products) {
            setProducts(res.data.products);
          } else {
            setError('Dữ liệu không đúng định dạng.');
          }
        })
        .catch(() => setError('Không thể tải dữ liệu.'));
    }
  }, [products, setProducts]);

  const handleDelete = (id) => {
    if (role !== 'admin') return;
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
  };

  const handleAddToCart = (product) => {
    const existing = JSON.parse(localStorage.getItem('cart')) || [];
    const updated = [...existing, product];
    localStorage.setItem('cart', JSON.stringify(updated));
    alert('Đã thêm vào giỏ hàng!');
  };

  return (
    <div className="bg-dark text-white py-5 min-vh-100">
      <div className="container">
        <h2 className="text-center mb-5">Product List</h2>
        {error && <p className="text-danger text-center">{error}</p>}

        <div className="row justify-content-center">
          {products.length > 0 ? (
            products.map(product => (
              <div key={product.id} className="col-md-3 mb-4 d-flex">
                <div className="card h-100 w-100">
                  <img
                    src={`/Images/${product.image}`}
                    className="card-img-top"
                    alt={product.name}
                    style={{ height: '180px', objectFit: 'contain' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h6 className="card-title text-danger fw-bold">{product.name}</h6>
                    <p className="card-text small">{product.description}</p>
                    <p className="mb-0 text-muted"><del>{product.price} đ</del></p>
                    <p className="text-danger fw-bold">{product.currentPrice} đ</p>
                  </div>
                  <div className="card-footer bg-white border-0 text-center">
                    <Link to={`/product/${product.id}`} className="btn btn-danger btn-sm me-2">
                      View
                    </Link>

                    {role === 'admin' && (
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="btn btn-outline-danger btn-sm"
                      >
                        Delete
                      </button>
                    )}

                    {role === 'user' && (
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn btn-outline-success btn-sm mt-2"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Đang tải sản phẩm...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
