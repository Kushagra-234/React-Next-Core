import React, { useEffect, useState } from "react";

const InputFilterListSec = () => {
  const data = ["mango", "apple", "papaya", "lichie", "banana"];
  const [inputVal, setInputVal] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  useEffect(() => {
    let timerId;

    timerId = setTimeout(() => {
      setDebouncedValue(inputVal);
    }, 300);

    return () => clearTimeout(timerId);
  }, [inputVal]);

  const filteredArray = data.filter((fruits) => {
    return fruits.toLowerCase().includes(debouncedValue.toLowerCase() ?? "");
  });

  return (
    <div className="w-full justify-center items-center h-full flex flex-col ">
      <div>Input List</div>
      <div className=" flex flex-col gap3">
        <input onChange={(e) => handleChange(e)} className="border-2" />
        <div>
          {filteredArray.map((item) => {
            return <div>{item}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default InputFilterListSec;
