import React, { useState, useReducer } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

// Reducer để quản lý trạng thái form
const initialState = {
  name: "",
  age: "",
  email: "",
  phone: "",
  gender: "",
  terms: false,
  isSubmitted: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT":
      return { ...state, isSubmitted: true };
    default:
      return state;
  }
};

// Component Form
const RegistrationForm = ({ title, onSubmit }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false); // Biến để kiểm soát việc hiển thị alert

  // Hàm xử lý thay đổi giá trị input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch({
      type: "SET_FIELD",
      field: name,
      value: type === "checkbox" ? checked : value,
    });
  };

  // Hàm kiểm tra lỗi trước khi submit
  const handleValidation = () => {
    const newErrors = {};

    // Kiểm tra Tên
    if (!state.name || state.name.length < 3 || state.name.length > 50) {
      newErrors.name = "Tên phải có từ 3 đến 50 ký tự!";
    }

    // Kiểm tra Tuổi
    if (!state.age || state.age < 18 || state.age > 100) {
      newErrors.age = "Tuổi phải từ 18 đến 100!";
    }

    // Kiểm tra Email
    if (!state.email || !/\S+@\S+\.\S+/.test(state.email)) {
      newErrors.email = "Email không hợp lệ!";
    }

    // Kiểm tra Số điện thoại
    if (!state.phone || !/^\d{10,15}$/.test(state.phone)) {
      newErrors.phone = "Số điện thoại phải từ 10 đến 15 chữ số!";
    }

    // Kiểm tra Điều khoản
    if (!state.terms) {
      newErrors.terms = "Bạn phải đồng ý với điều khoản!";
    }

    // Nếu có lỗi, hiển thị alert
    if (Object.keys(newErrors).length > 0) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      dispatch({ type: "SUBMIT" });
      onSubmit(state);
    }
  };

  return (
    <Container>
      <h3>{title}</h3>

      {/* Hiển thị Alert nếu có lỗi */}
      {showAlert && (
        <Alert variant="danger">
          <strong>Lỗi:</strong> Vui lòng kiểm tra các trường hợp lỗi.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAge">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={state.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={state.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formGender">
          <Form.Label>Giới tính</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={state.gender}
            onChange={handleChange}
          >
            <option value="">Chọn giới tính</option>
            <option value="Male">Nam</option>
            <option value="Female">Nữ</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formTerms">
          <Form.Check
            type="checkbox"
            label="Đồng ý với điều khoản"
            name="terms"
            checked={state.terms}
            onChange={handleChange}
            isInvalid={!!errors.terms}
          />
          <Form.Control.Feedback type="invalid">
            {errors.terms}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={state.isSubmitted}>
          Gửi
        </Button>
      </Form>
    </Container>
  );
};

// Xác định PropTypes cho RegistrationForm
RegistrationForm.propTypes = {
  title: PropTypes.string.isRequired, // Tiêu đề phải là một chuỗi
  onSubmit: PropTypes.func.isRequired, // Hàm onSubmit phải là một function
};

export default RegistrationForm;
