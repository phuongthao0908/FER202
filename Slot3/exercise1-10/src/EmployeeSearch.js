import React, { useState } from 'react';

function EmployeeSearch() {
  const employees = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 17 },
    { id: 3, name: "Charlie", age: 30 },
    { id: 4, name: "David", age: 19 }
  ];

  const [query, setQuery] = useState('');

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search employee by name..." 
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ padding: '8px', width: '300px', marginBottom: '10px' }}
      />

      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map(emp => (
            <li key={emp.id}>
              {emp.name} - Age: {emp.age}
            </li>
          ))
        ) : (
          <li>No matching employees</li>
        )}
      </ul>
    </div>
  );
}

export default EmployeeSearch;
