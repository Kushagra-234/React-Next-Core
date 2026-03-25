import React, { useState } from "react";

// Ek Notes app (Google Keep jaisa lite version)

// Tu notes bana sakta hai, search kar sakta hai, pin kar sakta hai, delete + undo kar sakta hai.

// Feature by feature (clear)
// 1. ➕ Add Note
// 2 input:
// Title
// Content
// “Add” button dabaya →
// new note list me add ho jaye

// 👉 Example:

// Title: Gym

const initialNotes = [
  { id: 1, title: "Gym", content: "Leg day", pinned: false },
  { id: 2, title: "Work", content: "Finish assignment", pinned: false },
  { id: 3, title: "Shopping", content: "Buy milk", pinned: false },
];

const GoogleKeep = () => {
  const [titleVal, setTitleVal] = useState("");
  const [contentVal, setContentVal] = useState("");
  const [initialNotesValue, setInitalNotesValue] = useState(initialNotes);
  const [searchedVal, setSearchedVal] = useState("");
  const [lastDeleted, setLastDeleted] = useState();

  const handleAdd = () => {
    const newNotes = {
      id: Date.now(),
      title: titleVal,
      content: contentVal,
      pinned: false,
    };

    setInitalNotesValue([...initialNotesValue, newNotes]);
  };

  const handlePinChange = (id) => {
    setInitalNotesValue((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, pinned: !item.pinned };
        } else return item;
      })
    );
  };

  const handleDelete = (id) => {
    // shuru me hi delete nji krna hai
    const tobeDeletedItem = initialNotesValue.find((item) => item.id === id);
    setLastDeleted(tobeDeletedItem);

    const arrayAfterdelete = initialNotesValue.filter((item) => item.id !== id);
    setInitalNotesValue(arrayAfterdelete);

    setTimeout(() => {
      setLastDeleted(null);
    }, [5000]);
  };

  const handleUndo = () => {
    if (lastDeleted) {
      setInitalNotesValue((prev) => [...prev, lastDeleted]);
      setLastDeleted(null);
    }
  };

  const searchedResult = initialNotesValue.filter((NotesVal) => {
    return NotesVal.title.includes(searchedVal);
  });

  const pinned = searchedResult.filter((item) => item.pinned === true);
  const notPinned = searchedResult.filter((item) => item.pinned === false);

  const finalArr = [...pinned, ...notPinned];

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h3>Google Keep</h3>
      <div className="flex mt-5 items-start flex-col gap-5">
        <h4>Create new Note</h4>
        <div className="flex justify-center gap-2">
          <div>Title</div>
          <input
            onChange={(e) => setTitleVal(e.target.value)}
            className="border-2"
          />
        </div>
        <div className="flex justify-center gap-2">
          <div>Content</div>
          <textarea
            onChange={(e) => setContentVal(e.target.value)}
            className="border-2"
          />
        </div>
        <button
          onClick={handleAdd}
          className="border-2 w-full flex justify-center items-center px-2"
        >
          {" "}
          Add Note
        </button>
        <div className="flex mt-2 flex-col">
          <div>Search-Bar</div>
          <input
            onChange={(e) => setSearchedVal(e.target.value)}
            className="border-2"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 w-[80%] mt-12 justify-start items-center">
        {finalArr.map((keepItems) => {
          return (
            <div className="flex items-start   justify-start flex-col gap-2">
              <div className="flex gap-3">
                <div>{keepItems.title}</div>
                <button
                  onClick={() => handlePinChange(keepItems.id)}
                  className="border-2 cursor-pointer px-3"
                >
                  {keepItems.pinned ? "pinned" : "pin"}
                </button>
                <button
                  onClick={() => handleDelete(keepItems.id)}
                  className="border-2 px-2"
                >
                  Delete
                </button>
              </div>
              <div>{keepItems.content}</div>
            </div>
          );
        })}
        {lastDeleted && (
          <button onClick={() => handleUndo()} className="border-2 px-2">
            UNDO
          </button>
        )}
        {searchedResult.length === 0 && <div>No result Found</div>}
      </div>
    </div>
  );
};

export default GoogleKeep;
