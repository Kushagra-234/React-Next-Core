import React from "react";

const ChildNested = ({ node }) => {
  return (
    <div>
      {node.text}
      <div className="ml-3">
        {node &&
          node.replies.map((item) => {
            return <ChildNested node={item} />;
          })}
      </div>
    </div>
  );
};

export default ChildNested;
