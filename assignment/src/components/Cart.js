// src/components/Cart.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate(); 
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(stored);
  }, []);

  const handleRemove = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Giỏ hàng của bạn</h2>

      {cartItems.length === 0 ? (
        <p>Chưa có sản phẩm nào trong giỏ hàng.</p>
      ) : (
        <>
          <div className="row">
            {cartItems.map(item => (
              <div className="col-md-4 mb-4" key={item.id}>
                <div className="card h-100">
                  <img
                    src={`/Images/${item.image}`}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: '180px', objectFit: 'contain' }}
                  />
                  <div className="card-body">
                    <h6 className="card-title text-danger">{item.name}</h6>
                    <p>{item.description}</p>
                    <p><del>{item.price} đ</del></p>
                    <p className="text-danger fw-bold">{item.currentPrice} đ</p>
                  </div>
                  <div className="card-footer text-end">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      Xóa khỏi giỏ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Nút quay về mua sắm */}
          <div className="text-end mt-4">
            <button className="btn btn-secondary" onClick={() => navigate('/')}>
              Tiếp tục mua sắm
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
