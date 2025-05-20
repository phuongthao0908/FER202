function PersonDetails(){
    const person = {
        name: "Alice",
        age: 21,
        occupation: "Business",
    };
      return (
    <div style={{ textAlign: "center"}}>
      <h2>Person Details</h2>
      <p><strong>Name:</strong> {person.name}</p>
      <p><strong>Age:</strong> {person.age}</p>
      <p><strong>Occupation:</strong> {person.occupation}</p>
    </div>
  );
}

export default PersonDetails;
