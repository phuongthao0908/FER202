//src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setRole }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();

    // Giả lập tài khoản
    if (username === 'admin' && password === 'admin123') {
      setRole('admin');
      navigate('/add'); // ✅ Admin chuyển vào trang Add Product
    } else if (username === 'user' && password === 'user123') {
      setRole('user');
      navigate('/'); // ✅ User vẫn vào trang Home như cũ
    } else {
      alert('Tài khoản không hợp lệ!');
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Mật khẩu"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="btn btn-dark" type="submit">
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default Login;
