// Question 6: mini component design

// Mujhe bata, accordion component kaise build karega.

// Requirements:

// multiple sections
// header pe click karo to section open/close ho
// ek time pe sirf one section open
// scalable and reusable hona chahiye

// Answer structure me de:

// state kya hogi
// data shape kya hoga
// toggle logic
// edge cases
// optimization / reusability

// Iska answer de, uske baad main tera final pass/fail with exact weak areas dunga.

import React, { useState } from "react";

const NewDAccrodian = () => {
  const [openId, setOpenId] = useState(null);
  const accordionData = [
    {
      id: 1,
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces using reusable components.",
    },
    {
      id: 2,
      title: "What is useState?",
      content:
        "useState is a React Hook that lets you add state to functional components.",
    },
    {
      id: 3,
      title: "What is useEffect?",
      content:
        "useEffect is a React Hook used for side effects like API calls, subscriptions, and timers.",
    },
    {
      id: 4,
      title: "What is prop drilling?",
      content:
        "Prop drilling is passing data through multiple intermediate components just to reach a deeply nested child.",
    },
  ];

  const handleClick = (id) => {
    if (openId === id) {
      setOpenId(null);
    } else setOpenId(id);
  };

  return (
    <div className="flex flex-col w-full h-full">
      {accordionData.map((accordionItem) => {
        return (
          <div>
            <div className="flex gap-3">
              <div>{accordionItem.title}</div>
              <button onClick={() => handleClick(accordionItem.id)}>
                {">"}
              </button>
            </div>
            <div>{openId === accordionItem.id && accordionItem.content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default NewDAccrodian;

const useDebounce = (inputVal, delay) => {
  const [debouncedVal, seDebouncedVal] = useState("");

  let timerId;

  timerId = setTimeout(() => {
    clearTimeout(timerId);
    seDebouncedVal(inputVal);
  }, delay);

  return debouncedVal;
};
