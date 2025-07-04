import React, { useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login"; // Import Login

// Lazy load các component
const PostList = React.lazy(() => import("./components/PostList"));
const CreatePost = React.lazy(() => import("./components/CreatePost"));
const EditPost = React.lazy(() => import("./components/EditPost"));
const DeletePost = React.lazy(() => import("./components/DeletePost"));

const App = () => {
  const [username, setUsername] = useState("");  // Lưu trạng thái đăng nhập

  // Hàm xử lý đăng nhập thành công
  const handleLogin = (username) => {
    setUsername(username);  // Cập nhật username khi đăng nhập thành công
  };

  return (
    <Router>
      <div>
        <h1 className="text-center my-4">Quản lý Bài Viết</h1>
        
        {username ? (
          // Khi đã đăng nhập, hiển thị các trang khác
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<PostList />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/edit/:id" element={<EditPost />} />
              <Route path="/delete/:id" element={<DeletePost />} />
            </Routes>
          </Suspense>
        ) : (
          // Nếu chưa đăng nhập, hiển thị trang Login
          <Login onLogin={handleLogin} />  // Truyền handleLogin vào Login
        )}
      </div>
    </Router>
  );
};

export default App;
