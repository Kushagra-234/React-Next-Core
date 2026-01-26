import React from "react";
// import ChildRecursiveData from "./ChildRecursiveData";
import ChildRecursiveAccordian from "./ChildRecursiveAccordian";

const data = [
  {
    id: 1,
    name: "Parent",
    children: [
      { id: 2, name: "Child 1" },
      {
        id: 3,
        name: "Child 2",
        children: [{ id: 4, name: "Grandchild" }],
      },
    ],
  },
];

const RecuriveTreeDataAccoridan = () => {
  return (
    <div className="flex w-full justify-center flex-col items-center h-full">
      <h3>Expandable tree</h3>
      {data?.map((node) => {
        return <ChildRecursiveAccordian node={node} />;
      })}
    </div>
  );
};

export default RecuriveTreeDataAccoridan;
