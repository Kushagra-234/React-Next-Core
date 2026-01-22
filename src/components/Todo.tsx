import React, { useState } from "react";

const TodoApp = () => {
  const [inputValue, setInputVaue] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (editIndex !== null) {
      const tempArray = [...todos];
      tempArray[editIndex] = inputValue;
      setTodos(tempArray);
      setEditIndex(null);
    } else {
      setTodos([...todos, inputValue]);
    }
    setInputVaue("");
  };
  const handleDelete = (id) => {
    const newArr = todos.filter((i, idx) => {
      return idx !== id;
    });

    setTodos(newArr);
  };

  const handleEdit = (id) => {
    setEditIndex(id);
    setInputVaue(todos[id]);
  };
  return (
    <div className="w-full flex flex-col">
      <div>Todo APP</div>
      <div className="flex gap-3">
        <input
          className="border-2 w-64"
          value={inputValue}
          onChange={(e) => setInputVaue(e.target.value)}
        />
        <button onClick={handleAdd}>+</button>
      </div>
      <div>
        {todos.map((item, id) => {
          return (
            <div className="flex gap-3">
              {item}
              <button onClick={() => handleDelete(id)}>delete</button>
              <button onClick={() => handleEdit(id)}>Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoApp;
