import React from "react";

const ChecboxComp = ({ data, checkBoxState, setCheckBoxState }) => {
  const isChecked = checkBoxState[data.id] ? true : false;

  const handleChange = () => {
    const newObj = { ...checkBoxState };
    newObj[data.id] = !isChecked;
    setCheckBoxState(newObj);
  };

  return (
    <div className="ml-3">
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        {data.label}
        {data.children &&
          data.children.map((child) => {
            return (
              <ChecboxComp
                key={child.id}
                data={child}
                checkBoxState={checkBoxState}
                setCheckBoxState={setCheckBoxState}
              />
            );
          })}
      </label>
    </div>
  );
};

export default ChecboxComp;
