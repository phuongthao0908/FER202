import React from 'react';

const employees = [
  { id: 1, name: "Anna", department: "HR" },
  { id: 2, name: "Brian", department: "IT" },
  { id: 3, name: "Clara", department: "Finance" },
  { name: "Ann", department: "Finance" },
  { name: "Elisabeth", department: "HR" }
];

const SortedEmployeeList = () => {
  const grouped = {};
  employees.forEach(emp => {
    if (!grouped[emp.department]) grouped[emp.department] = [];
    grouped[emp.department].push(emp.name);
  });

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Employees GROUPED BY Department</h2>
      {Object.keys(grouped).map(dept => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul style={{ listStyleType: 'disc', textAlign: 'left', display: 'inline-block' }}>
            {grouped[dept].map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SortedEmployeeList;