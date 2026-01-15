import React, { useEffect, useState } from "react";

const data = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Grapes",
  "Watermelon",
];

const InputBoxControlled = () => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedVal, setDebouncedVal] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedVal(inputValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue]);

  const filteredResult = data.filter((item) => {
    return item.toLowerCase().includes(debouncedVal.toLowerCase());
  });
  return (
    <div className="w-full flex flex-col justify-between items-center">
      <input
        className="w-64 h-10 border-2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>
        {filteredResult.map((itemRender) => {
          return <div>{itemRender}</div>;
        })}

        {filteredResult.length === 0 && <div>No results found</div>}
      </div>
    </div>
  );
};
export default InputBoxControlled;
