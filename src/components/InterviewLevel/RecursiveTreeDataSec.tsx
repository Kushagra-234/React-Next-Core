import React from "react";
import ChildRecursiveData from "./ChildRecursiveData";

const RecursiveTreeDataSec = () => {
  const data = [
    {
      id: 1,
      name: "Parent",
      children: [
        { id: 2, name: "Child 1" },
        { id: 3, name: "Child 2", children: [{ id: 4, name: "Grandchild" }] },
      ],
    },
  ];

  return (
    <div className="flex w-full h-full flex-col justify-center items-center">
      <h3>Recursive Tree</h3>
      {data.map((node) => {
        return <ChildRecursiveData node={node} />;
      })}
    </div>
  );
};

export default RecursiveTreeDataSec;
