import React, { useState } from "react";

const FileExplorerChild = ({ fileData, AddNode }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [inputVisible, setInputVisible] = useState(false);
  const isFolder = fileData?.type === "folder";
  const [fileType, setFileType] = useState("");
  const [inputVal, setInputVal] = useState("");

  const handleClick = (e, type) => {
    console.log("hello");
    e.stopPropagation();
    setInputVisible(!inputVisible);
    setFileType(type);
  };

  const handleKeydown = (e) => {
    console.log("hithua");
    console.log(fileData.id);
    if (e.key === "Enter" && inputVal) {
      AddNode(inputVal, fileData.id, fileType);
    }
  };
  return (
    <div className="flex flex-col gap-6 cursor-pointer">
      <div onClick={() => setIsVisible(!isVisible)} className="flex gap-2">
        <div className="font-bold flex gap-3">
          <div>{isFolder ? "🗂️" : "📂"}</div>
          {fileData?.name}
        </div>
        {isFolder && (
          <div className="flex gap-3">
            <button
              className="cursor-pointer"
              onClick={(e) => handleClick(e, "folder")}
            >
              Add Folder
            </button>
            <button
              className="cursor-pointer"
              onClick={(e) => handleClick(e, "file")}
            >
              Add File
            </button>
          </div>
        )}
      </div>

      {inputVisible && (
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => handleKeydown(e)}
          className="border-2"
        />
      )}

      <div>
        {fileData.children &&
          isVisible &&
          fileData.children.map((childData) => {
            return (
              <div className="ml-6">
                <FileExplorerChild AddNode={AddNode} fileData={childData} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FileExplorerChild;
