import { useState } from 'react';

function DragDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index) => {
    if (draggingItem === null) return;
    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggingItem, 1);
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
    setDraggingItem(null);
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '20px' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            style={{ padding: '5px', cursor: 'move' }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragDropList;