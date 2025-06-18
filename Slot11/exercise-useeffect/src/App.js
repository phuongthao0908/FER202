import React from "react";
import ValidatedInput from "./components/ValidatedInput";
import LoginForm from "./components/LoginForm";
import FormComponent from "./components/FormComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-4">
      <h1>React useEffect Exercises</h1>

      <hr />
      <h2>Exercise 4: Validate Input Length </h2>
      <ValidatedInput />

      <hr />
      <h2>Exercise 5: Validate Email & Password</h2>
      <LoginForm />

      <hr />
      <h2>Exercise 6: Full Form Validation </h2>
      <FormComponent />
    </div>
  );
}

export default App;
