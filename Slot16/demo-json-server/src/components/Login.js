import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");  // Thêm state cho thông báo
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username);  // Cập nhật username khi đăng nhập thành công
      setError("");
      setMessage(`Login successfully with username: ${username}`);  // Hiển thị thông báo thành công

      // Dùng setTimeout để trì hoãn 5 giây trước khi điều hướng
      setTimeout(() => {
        navigate("/");  // Điều hướng đến trang PostList sau khi đăng nhập
      }, 5000); // Đợi 5 giây trước khi điều hướng
    } else {
      setError("Username và password không thể để trống!");  // Hiển thị lỗi nếu các trường trống
    }
  };

  return (
    <Container>
      <h1 className="my-3 text-center">Đăng nhập</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Nhập tên đăng nhập" 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Nhập mật khẩu" 
          />
        </Form.Group>
        {error && <div className="text-danger">{error}</div>}  {/* Hiển thị thông báo lỗi */}
        {message && <div className="text-success">{message}</div>}  {/* Hiển thị thông báo thành công */}
        <Button variant="primary" type="submit">Đăng nhập</Button>
      </Form>
    </Container>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired  // Kiểm tra xem onLogin có phải là một hàm không
};

export default Login;
