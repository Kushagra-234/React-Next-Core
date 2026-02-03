import React, { useState } from "react";

const ExplorerRecursive = ({ explorerData, AddNode }) => {
  const [showFolder, setShowFolder] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [folderType, setFolderType] = useState("folder");

  const isFolder = explorerData.type === "folder";

  const handleClick = (e, type) => {
    e.stopPropagation();
    setShowInput(!showInput);
    setFolderType(type === "file" ? "file" : "folder");
  };

  const handleKeyDown = (e, folderId) => {
    if (e.key === "Enter" && inputVal) {
      AddNode(folderId, inputVal, Date.now(), folderType);
      //   Addnode kya kya lega inputval,kis id wale node me insert krna hai
    }
  };
  return (
    <div className="flex flex-col gap-5">
      <div
        className="flex cursor-pointer gap-4"
        onClick={() => setShowFolder(!showFolder)}
      >
        {isFolder ? "📂" : "🗂️"}
        <div className="flex gap-3">
          <div>{explorerData?.name}</div>
          {isFolder && (
            <div className="flex gap-2">
              <button onClick={(e) => handleClick(e, "folder")}>
                Add Folder
              </button>
              <button onClick={(e) => handleClick(e, "file")}>Add file</button>
            </div>
          )}
        </div>
      </div>

      {showInput && isFolder && (
        <input
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, explorerData?.id)}
          className="border-2"
        />
      )}

      {explorerData?.children &&
        isFolder &&
        showFolder &&
        explorerData.children.map((item) => {
          return (
            <div className="pl-2">
              <ExplorerRecursive AddNode={AddNode} explorerData={item} />
            </div>
          );
        })}
    </div>
  );
};

export default ExplorerRecursive;
