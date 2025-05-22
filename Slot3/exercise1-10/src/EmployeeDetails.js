import React from 'react';

const employee = { name: "John Doe", age: 30, department: "IT" };

const EmployeeDetails = () => {
  // Destructure the employee object
  const { name, age, department } = employee;

  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Department: {department}</p>
    </div>
  );
};

export default EmployeeDetails;
