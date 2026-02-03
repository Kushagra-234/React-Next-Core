import React, { useState } from "react";

// step 1 render all items recursively
// on click of root it should open close
// folder ke aage add file and add folder button
// lekin type pta hona chahioye
// ab inpue pe naya node bnega
// call Addnode funcrion
// inputvalue

const EXplorerRecursive2 = ({ explorerData, AddNode }) => {
  const [isOpen, setOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [type, setType] = useState("");
  const isFolder = explorerData.type === "folder";
  const handleClick = (e, type) => {
    e.stopPropagation();
    setIsVisible(!isVisible);
    setType(type === "folder" ? "folder" : "file");
  };

  const handleKeyDown = (e, parentId) => {
    if (e.key === "Enter" && inputVal) {
      AddNode(Date.now(), inputVal, type, parentId);
    }
  };
  return (
    <div className="flex flex-col">
      <div
        className="flex gap-3 cursor-pointer"
        onClick={() => setOpen(!isOpen)}
      >
        {isFolder ? "🗂️" : "📂"} {explorerData?.name}
        {isFolder && (
          <div className="flex gap-3">
            <button onClick={(e) => handleClick(e, "folder")}>
              Add Folder
            </button>
            <button onClick={(e) => handleClick(e, "file")}>Add File</button>
          </div>
        )}
      </div>

      {isVisible && isFolder && (
        <input
          onKeyDown={(e) => handleKeyDown(e, explorerData.id)}
          onChange={(e) => setInputVal(e.target.value)}
          className="border-2"
        />
      )}

      {explorerData.children &&
        isOpen &&
        explorerData.children.map((nestedItems) => {
          return (
            <div className="pl-5 pt-4">
              <EXplorerRecursive2
                AddNode={AddNode}
                explorerData={nestedItems}
              />
            </div>
          );
        })}
    </div>
  );
};

export default EXplorerRecursive2;
