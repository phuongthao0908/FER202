import { useState } from 'react';

function ColorSwitcher() {
  const [color, setColor] = useState('white');

  return (
    <div style={{ textAlign: 'center', paddingTop: '20px', display: 'flex', justifyContent: 'center' }}>
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ padding: '2px', border: '1px solid #ccc', fontSize: '12px', marginRight: '10px' }}
      >
        <option value="white">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color,
        }}
      />
    </div>
  );
}

export default ColorSwitcher;