import React, { useState } from "react";

const accordionData = [
  { id: 1, title: "What is React?", content: "React is a frontend library." },
  { id: 2, title: "What is State?", content: "State is component memory." },
  { id: 3, title: "What is Props?", content: "Props pass data to components." },
];

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleCLick = (id: number) => {
    if (openIndex === id) {
      setOpenIndex(null);
    } else {
      setOpenIndex(id);
    }
  };
  return (
    <div className="flex justify-center items-center mt-5 w-full flex-col">
      <div>Accoridan Tab</div>
      <div>
        {accordionData.map((item) => {
          return (
            <div className="flex flex-col">
              <div className="flex gap-2">
                {item?.title}
                <button onClick={() => handleCLick(item?.id)}>{">"}</button>
              </div>
              <div>{item?.id == openIndex && item?.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordian;
