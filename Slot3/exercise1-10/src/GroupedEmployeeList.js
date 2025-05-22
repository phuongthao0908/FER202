import React from 'react';

const employees = [
  { id: 1, name: "Anna", department: "HR", age: 50 },
  { id: 2, name: "Brian", department: "IT", age: 40 },
  { id: 3, name: "Clara", department: "Finance", age: 19 },
  { name: "Ann", department: "Finance", age: 22 },
  { name: "Elisabeth", department: "HR", age: 16 }
];

const GroupedEmployeeList = () => {
  // Nhóm nhân viên theo phòng ban
  const grouped = employees.reduce((acc, emp) => {
    const dept = emp.department;
    if (!acc[dept]) {
      acc[dept] = [];
    }
    acc[dept].push(emp);
    return acc;
  }, {});

  return (
    <div>
      <h2>Employees Grouped by Department</h2>
      {Object.keys(grouped).sort().map((dept) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
            {grouped[dept].map((emp, index) => (
              <li key={emp.id || index}>{emp.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GroupedEmployeeList;