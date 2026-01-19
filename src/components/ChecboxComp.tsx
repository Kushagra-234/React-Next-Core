import React, { useState } from "react";

const CheckboxComp = ({ data, checkBoxState, setCheckBoxState }) => {
  const [inputValue, setInputValue] = useState("");
  const isChecked = checkBoxState[data.id] ? true : false;

  const handleChange = () => {
    const newObj = { ...checkBoxState };
    newObj[data.id] = !isChecked;
    setCheckBoxState(newObj);
  };
  return (
    <div className="ml-3">
      <label>
        <input
          onChange={handleChange}
          value={inputValue}
          checked={isChecked}
          type="checkbox"
        />

        {data.label}
        {data.children &&
          data.children.map((r) => {
            return (
              <CheckboxComp
                data={r}
                checkBoxState={checkBoxState}
                setCheckBoxState={setCheckBoxState}
              />
            );
          })}
      </label>
    </div>
  );
};

export default CheckboxComp;
