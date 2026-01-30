import React, { useEffect, useState } from "react";

const users = [
  { id: 1, name: "Aman" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Kushagra" },
];

const InputFilterListSec = () => {
  const [inputVal, setInputValue] = useState("");
  const [debouncedVal, setDebouncedVal] = useState("");

  useEffect(() => {
    let timerId;

    timerId = setTimeout(() => {
      setDebouncedVal(inputVal);
    }, 300);
  }, [inputVal]);

  const renderData = users.filter((data) => {
    return data.name.toLowerCase().includes(debouncedVal.toLowerCase());
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>InputList</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          style={{ border: "2px solid black" }}
        />
        {inputVal &&
          renderData.map((indItem) => {
            return <div>{indItem.name}</div>;
          })}
      </div>
    </div>
  );
};

export default InputFilterListSec;
