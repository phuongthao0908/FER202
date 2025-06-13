import { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ textAlign: 'center', paddingTop: '20px' }}>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>Toggle me!</p>}
    </div>
  );
}

export default ToggleVisibility;