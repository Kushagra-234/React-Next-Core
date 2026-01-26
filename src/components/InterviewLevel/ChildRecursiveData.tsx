import React from "react";

const ChildRecursiveData = ({ node }) => {
  return (
    <div className="flex flex-col gap-3">
      <div>{node.name}</div>
      {node.children &&
        node.children.map((items) => {
          return <ChildRecursiveData node={items} />;
        })}
    </div>
  );
};

export default ChildRecursiveData;
