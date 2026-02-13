import React, { useState } from "react";

const TodoNew = () => {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (editId !== null) {
      const editArray = [...todos];
      editArray[editId] = inputVal;
      setTodos(editArray);
      setEditId(null);
    } else {
      setTodos([...todos, inputVal]);
    }
    setInputVal("");
  };

  const handleDelete = (index) => {
    const nayaArr = todos.filter((item, idx) => {
      return idx !== index;
    });
    setTodos(nayaArr);
  };

  const handleEdit = (todoItem, index) => {
    setInputVal(todoItem);
    setEditId(index);
  };
  return (
    <div className="flex justify-center h-full w-full items-center flex-col gap-3 ">
      <h3>TODO Application </h3>
      <div className="flex gap-3">
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="border-2"
        />
        <button onClick={() => handleAdd()}>Add</button>
      </div>

      {todos.map((todoItem, index) => {
        return (
          <div key={index} className="flex gap-3">
            <div> {todoItem} </div>
            <div className="flex gap-3">
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdit(todoItem, index)}>Edit</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoNew;
