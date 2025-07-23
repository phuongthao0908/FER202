//src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ role, setRole }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setRole(null);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Laptop Store</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">

          {/* ✅ Chỉ hiện Home khi là user */}
          {role === 'user' && (
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
          )}

          {/* ✅ Admin thấy Add Product */}
          {role === 'admin' && (
            <li className="nav-item">
              <Link className="nav-link" to="/add">Add Product</Link>
            </li>
          )}

          {/* ✅ User thấy Cart */}
          {role === 'user' && (
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
          )}

          {/* ✅ Nếu chưa login thì hiện Login */}
          {!role && (
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          )}

          {/* ✅ Nếu đã login thì có Logout */}
          {role && (
            <li className="nav-item">
              <button className="btn btn-sm btn-outline-light ms-3" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
