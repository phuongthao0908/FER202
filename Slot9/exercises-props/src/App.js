import NameList from "./components/NameList";
import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// Dùng Container, Row, Col để bố trí các Card
import StudentCard from "./components/StudentCard"; // Import StudentCard component

function App() {
  const userData = { name: "Thaonp@fpt.edu.vn", age: 20 };
  const namesList = ["Thaonp@fpt.edu.vn", "test@fe.edu.vn"];
  //Danh sach students
  const students = [
    { name: "Thaonp@fpt.edu.vn", age: 21, avatar: "/images/student1.jpg" },
    { name: "Quynhnp@fpt.edu.vn", age: 22, avatar: "/images/student2.jpg" },
    { name: "Lannp@fpt.edu.vn", age: 23, avatar: "/images/student3.jpg" },
  ];
  return (
    <>
      <Welcome name="traltb@fe.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {/*Duyệt qua mảng students và truyền từng đối tượng student vào Student Card*/}
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;




