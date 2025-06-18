import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  useEffect(() => {
    if (emailTouched) setEmailValid(validateEmail(email));
  }, [email, emailTouched]);

  useEffect(() => {
    if (passwordTouched) setPasswordValid(password.length >= 8);
  }, [password, passwordTouched]);

  const isFormValid = emailValid && passwordValid && email && password;

  return (
    <Form>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
          isInvalid={emailTouched && !emailValid}
        />
        <Form.Control.Feedback type="invalid">
          Email không hợp lệ.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setPasswordTouched(true)}
          isInvalid={passwordTouched && !passwordValid}
        />
        <Form.Control.Feedback type="invalid">
          Mật khẩu phải có ít nhất 8 ký tự.
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" disabled={!isFormValid}>
        Đăng nhập
      </Button>
    </Form>
  );
}

export default LoginForm;
