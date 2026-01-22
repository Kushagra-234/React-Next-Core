import React from "react";

//  a state which keeps track of checked boxes and passed toc hild compoemnnt
// sabse pehle input render kro 
// fir recursively component render using data.dhild
// nikaalo ki uss bahar wale item ki state cehcked ya nhi 
// onchnage pe naya bnao copy of checkedstate and usske data.id me bharo !ulta and then use copy krdo 

const CheckboxComp = ({ data, checkBoxState, setCheckBoxState }) => {
  const isChecked = checkBoxState[data.id] ? true : false;

  const handleChange = () => {
    const newObj = { ...checkBoxState };
    newObj[data.id] = !isChecked;
    setCheckBoxState(newObj);
  };
  return (
    <div className="w-full ml-3">
      <label>
        <input onChange={handleChange} type="checkbox" checked={isChecked} />
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
