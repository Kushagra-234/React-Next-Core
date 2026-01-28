import React, { useState } from "react";

const ChildRecursiveAccordian = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        {node?.name}
        <button onClick={() => setIsOpen(!isOpen)}>{">"}</button>
      </div>

      {isOpen &&
        node.children &&
        node.children.map((nodeData) => {
          return <ChildRecursiveAccordian node={nodeData} />;
        })}
    </div>
  );
};

export default ChildRecursiveAccordian;


// microfrontend is a architectural design phoenomeon like microservives isme ham baat dete hai architecture ko small apps me sabka apna texh stack their own deployment confgis 
// like for eg-amazon.com 
// CART system
// Product Listing 
