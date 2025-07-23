//src/components/ProductDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetail({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id || p.id === parseInt(id));

  if (!product) return <p className="text-center">Không tìm thấy sản phẩm</p>;

  return (
    <div className="container py-5">
      <h2 className="mb-4">{product.name}</h2>
      <img src={`/Images/${product.image}`} alt={product.name} className="img-fluid mb-3" style={{ maxHeight: '300px' }} />
      <p>{product.description}</p>
      <p><del>{product.price} đ</del></p>
      <p className="text-danger fw-bold">{product.currentPrice} đ</p>
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default ProductDetail;
