import React from 'react';

const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];

const EmployeeList = () => {
  return (
    <ul style={{ listStylePosition: "inside", paddingLeft: "0" }}>

      {employees.map((employee, index) => (
        <li key={employee.id || index}>
          {employee.name} - {employee.department}
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;
