import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/posts') // Đảm bảo URL đúng
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error loading posts:', error));
  }, []);  // [] chỉ chạy một lần khi component mount

  return (
    <div>
      <h2>Post List (From JSON Server)</h2>
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))
        ) : (
          <p>Loading posts...</p>  // Hiển thị khi chưa có dữ liệu
        )}
      </ul>
    </div>
  );
}

export default Post;
