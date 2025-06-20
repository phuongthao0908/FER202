import React from "react";
import ItemList from "./components/ItemList"; // Bài 4
import QuestionQuiz from "./components/QuestionQuiz"; // Bài 5
import QuestionBank from "./components/QuestionBank"; 

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="py-4">
      <h2 className="mb-3 text-primary">Bài 4: Item List (CRUD, Sort, Filter)</h2>
      <ItemList />

      <hr className="my-5" />

      <h2 className="mb-3 text-success">Bài 5: Question Quiz cơ bản</h2>
      <QuestionQuiz /> 

      
      <hr className="my-5" />
      <h2 className="mb-3 text-danger">Bài 6: Question Quiz nâng cao</h2>
      <QuestionBank />
     
    </Container>
  );
}

export default App;
