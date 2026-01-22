import React from "react";

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

const AccordianSec = () => {
  return <div className="flex gap-2"></div>;
};

export default AccordianSec;
