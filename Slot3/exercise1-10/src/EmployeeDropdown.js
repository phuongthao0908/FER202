import React from 'react';

const employees = [
    {id: 1, name: 'Anna', department: 'HR', age: 50},
    {id: 2, name: 'Brian', department: 'IT', age: 40},
    {id: 3, name: 'Clara', department: 'Finance', age: 19},
    {name: 'Ann', department: 'Finance', age: 22 },
    {name: 'Elisabeth', department: 'HR', age: 16},
]
const EmployeeDropdown = () => {
    return (
      <div>
        <h2>Select an Employee</h2>
      <select>
        {employees.map((emp, index) => (
          <option key={emp.id || index} value={emp.name}>
            {emp.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EmployeeDropdown;