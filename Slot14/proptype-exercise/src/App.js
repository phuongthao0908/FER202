import React from "react";
import MyForm from "./components/MyForm";  // Form cho bài 3
import RegistrationForm from "./components/RegistrationForm";  // Form cho bài 4

const App = () => {
  const handleFormSubmitBai3 = (formData) => {
    console.log("Dữ liệu đã gửi từ bài 3:", formData);
  };

  const handleFormSubmitBai4 = (formData) => {
    console.log("Dữ liệu đã gửi từ bài 4:", formData);
  };

  return (
    <div className="App">
      <h1>Ứng Dụng React</h1>

      <h2>Bài 3: Đăng Ký Người Dùng</h2>
      <MyForm title="Đăng Ký Người Dùng - Bài 3" onSubmit={handleFormSubmitBai3} />
      
      <h2>Bài 4: Đăng Ký Người Dùng với Validation</h2>
      <RegistrationForm title="Đăng Ký Người Dùng - Bài 4" onSubmit={handleFormSubmitBai4} />
    </div>
  );
};

export default App;
