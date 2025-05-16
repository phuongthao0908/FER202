function PeopleList() {
  const people = [
    { name: "Alice", age: 21, occupation: "Business" },
    { name: "Peter", age: 30, occupation: "Developer" },
    { name: "Marry", age: 25, occupation: "Engineer" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>People List</h2>
      <ul style={{ listStylePosition: "inside", padding: 0 }}>
        {people.map((person, index) => (
          <li key={index}>
            {person.name}, {person.age} years old, {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;
