import { useState } from 'react';

function UserInputForm() {
  const [name, setName] = useState('Adam');
  const [age, setAge] = useState(35);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          console.log(e.target.value);
        }}
      />
      <p>My name is {name}</p>

      <input
        type="number"
        value={age}
        onChange={(e) => {
          const value = e.target.value;
          setAge(value ? parseInt(value, 10) : 0); // Xử lý chuỗi rỗng
        }}
      />
      <p>My age is {age}</p>
    </div>
  );
}

export default UserInputForm;