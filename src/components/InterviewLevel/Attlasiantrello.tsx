import React, { useState } from "react";

// trello
// type todo,inporgress,done

// [todo:{
// }]
// todoArrray,InprogressArray,DoneArray

type Categories = "todo" | "inProgress" | "done";

interface Task {
  id: number;
  text: string;
  category: Categories;
}

/* 
todo : [
{
id:date.now,
text:string
},
inporgress:[
{
id:Date.now(),
text:string
}
]
]
 */

const Attlasiantrello = () => {
  const [inputVal, setInputVal] = useState("");
  const [itemList, setItemList] = useState<Task[]>([]);
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    const newTask = {
      id: Date.now(),
      text: inputVal,
      category: "todo" as Categories,
    };

    if (editId !== null) {
      const updatedArray = itemList.map((item) => {
        if (item.id === editId) {
          return { ...item, text: inputVal };
        } else return item;
      });

      setEditId(null);

      setItemList(updatedArray);
    } else {
      setItemList([...itemList, newTask]);
    }

    setInputVal("");
  };

  const todoItems = itemList.filter((item) => item.category === "todo");
  const inProgressItem = itemList.filter(
    (item) => item.category === "inProgress"
  );
  const doneItems = itemList.filter((item) => item.category === "done");

  const handleEdit = (itemType) => {
    setInputVal(itemType.text);
    setEditId(itemType.id);
  };

  const handleAddtoNewColumn = (id, category) => {
    const filteredArray = itemList.map((itemVal) => {
      if (itemVal.id === id) {
        return { ...itemVal, category: category };
      } else return itemVal;
    });
    setItemList(filteredArray);
  };

  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-5">
      <h3>Trello Board</h3>
      <div className="flex gap-5">
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="border"
        />
        <button onClick={handleAdd} className="border cursor-pointer px-2">
          Add
        </button>
      </div>

      <div className="flex w-[90%] mt-5 justify-between ">
        <div className="flex flex-col gap-5">
          <div>ToDo</div>
          <div className="flex flex-col gap-5">
            {todoItems &&
              todoItems.map((itemType) => {
                return (
                  <div className="flex gap-5">
                    <div>{itemType.text}</div>
                    <button
                      onClick={() => handleEdit(itemType)}
                      className="border px-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        handleAddtoNewColumn(itemType.id, "inProgress")
                      }
                      className="border px-2"
                    >
                      Add to InProgress
                    </button>
                    <button className="border px-2">Add to Done</button>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>In-Progress</div>
          <div className="flex flex-col gap-5">
            {inProgressItem &&
              inProgressItem.map((itemType) => {
                return (
                  <div className="flex gap-5">
                    <div>{itemType.text}</div>
                    <button className="border px-2">Edit</button>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>Done</div>
          <div className="flex flex-col gap-5">
            {doneItems &&
              doneItems.map((itemType) => {
                return (
                  <div className="flex gap-5">
                    <div>{itemType.text}</div>
                    <button className="border px-2">Edit</button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attlasiantrello;
