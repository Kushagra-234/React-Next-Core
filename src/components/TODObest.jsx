import React, { useState } from "react";

const TODObest = () => {
  const [inputVal, setInputVal] = useState("");
  const [todosArr, setTodosArr] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (editId !== null) {
      const updatedArray = todosArr.map((itemEdited) => {
        if (itemEdited.id === editId) {
          return { ...itemEdited, text: inputVal };
        } else return itemEdited;
      });
      setTodosArr(updatedArray);
      setEditId(null);
    } else {
      setTodosArr([
        ...todosArr,
        {
          id: Date.now(),
          text: inputVal,
        },
      ]);
    }
    setInputVal("");
  };

  console.log(todosArr);

  const handleDelete = (id) => {
    const updatedArr = todosArr.filter((item) => item.id !== id);
    setTodosArr(updatedArr);
  };

  const handleEdit = (todosItem) => {
    setInputVal(todosItem.text);
    setEditId(todosItem.id);
  };

  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-5">
      <h2>TODO APP</h2>

      <div className="flex gap-3">
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="border"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {todosArr.map((todosItem) => {
        return (
          <div key={todosItem.id} className="flex gap-3">
            <div>{todosItem.text}</div>
            <button onClick={() => handleDelete(todosItem.id)}>Delete</button>
            <button onClick={() => handleEdit(todosItem)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default TODObest;
