import { useState } from 'react';

function UserInputForm() {
  const [text, setText] = useState('');

  return (
    <div style={{ textAlign: 'center', paddingTop: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default UserInputForm;