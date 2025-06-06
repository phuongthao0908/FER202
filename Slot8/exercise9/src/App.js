import React from 'react';
import { Container } from 'react-bootstrap';
import MyInfo from './components/MyInfo';         // Bài 1
import SimpleCard from './components/SimpleCard'; // Bài 4
import MyWebsite from './components/MyWebsite';   // Bài 5
import logo from './assets/image/logo.png';       // Import ảnh từ src

function App() {
  const cardData = {
  title: 'Thao Nguyen - FPT DaNang',
  description: '0777438510',
  imageUrl: logo,
};


  return (
    <Container className="my-5 text-center">
      <h1 className="mb-4">Bài 1: Thông tin cá nhân</h1>
      <MyInfo />

      <h1 className="mt-5 mb-4">Bài 4: Simple Card</h1>
      <SimpleCard item={cardData} />
      

      <h1 className="mt-5 mb-4">Bài 5: Giao diện Website đơn giản</h1>
      <MyWebsite />
    </Container>
  );
}

export default App;
