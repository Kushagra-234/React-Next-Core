import React, { useState } from "react";

const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces using components.",
  },
  {
    id: 2,
    title: "What is useState?",
    content:
      "useState is a React hook that allows functional components to manage local state.",
  },
  {
    id: 3,
    title: "What is Virtual DOM?",
    content:
      "Virtual DOM is a lightweight in-memory representation of the real DOM that helps React update UI efficiently.",
  },
];

// render krao accoridandata ko
// openid shuru me null agar openID barabar ho id ke jo pass ho rhi hai to setOpenId(null)
// setOpenId(id);

// multiple accordians ko open krna hai

// dekho approach ye hai ki openId ko ek array bna do agar multiple render krane hai to []
// aur agr click hua uspe to agr openId empty hai to bhar do usme wo id aur agar phle se hai to remove kr do

const AccordianSec = () => {
  const [openId, setOpenId] = useState<any[]>([]);

  const handleClick = (id) => {
    setOpenId((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  return (
    <div className="flex w-full h-full justify-center items-center flex-col gap-2">
      <h3>Accordian</h3>
      <div>
        {accordionData.map((accordItem, id) => {
          return (
            <div key={accordItem.id} className="flex flex-col gap-4">
              <div className=" flex gap-4">
                {accordItem.title}
                <button onClick={() => handleClick(id)}>
                  {" "}
                  {openId.includes(id) ? "▼" : "▶"}
                </button>
              </div>
              <div>{openId.includes(id) && accordItem?.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccordianSec;
