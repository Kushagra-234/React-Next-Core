import React, { useState } from "react";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    if (editIndex !== null) {
      const updatedArr = [...todo];
      updatedArr[editIndex] = inputValue;
      setTodo(updatedArr);
      setEditIndex(null);
    } else {
      setTodo([...todo, inputValue]);
    }
    setInputValue("");
  };

  const handleDelete = (index) => {
    const newArr = todo.filter((i, indexNew) => {
      return indexNew !== index;
    });

    setTodo(newArr);
  };

  const handleEdit = (index) => {
    setInputValue(todo[index]);
    setEditIndex(index);
  };
  return (
    <div className="w-full flex items-center justify-center flex-col h-full">
      <h1>Todo-APP</h1>
      <div>
        <input
          value={inputValue}
          onChange={(e) => handleChange(e)}
          className="w-64 h-10 border-4"
        />
        <button
          onClick={handleAdd}
          className="w-10 border-2 cursor-pointer h-10 ml-5"
        >
          +
        </button>
      </div>

      <div>
        {todo.map((items, index) => {
          return (
            <div className="flex gap-2">
              {items}
              <button onClick={() => handleDelete(index)} className="">
                -
              </button>
              <button onClick={() => handleEdit(index)} className="">
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoApp;
