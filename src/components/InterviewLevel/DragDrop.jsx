import React, { useState } from "react";

export default function DragDropList() {
  const [items, setItems] = useState(["A", "B", "C", "D"]);
  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDrop = (dropIndex) => {
    if (dragIndex === null || dragIndex === dropIndex) return;

    const copy = [...items];
    const [picked] = copy.splice(dragIndex, 1); // remove dragged
    copy.splice(dropIndex, 0, picked); // insert at drop
    setItems(copy);

    setDragIndex(null);
  };

  return (
    <div>
      <h3>Drag & Drop Reorder</h3>

      {items.map((item, index) => (
        <div
          key={item}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => e.preventDefault()} // IMPORTANT
          onDrop={() => handleDrop(index)}
          style={{
            padding: 12,
            border: "1px solid #ccc",
            marginBottom: 8,
            cursor: "grab",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
