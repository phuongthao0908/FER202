import { useState } from 'react';

function SearchFilter() {
  const [items] = useState(['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple']);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center', paddingTop: '20px' }}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search items..."
      />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;