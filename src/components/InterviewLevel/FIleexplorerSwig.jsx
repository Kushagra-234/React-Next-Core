import React, { useState } from "react";

const FileExplorer = ({ fileData, AddNode }) => {
  const isFolder = fileData.type === "folder";
  const [isVisible, setIsVisible] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [nodeType, setNodeType] = useState(""); // 'file' or 'folder'

  // Toggle visibility - no input logic here
  const toggleVisibility = (e) => {
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  // Show input for add
  const showAddInput = (e, type) => {
    e.stopPropagation();
    setShowInput(true);
    setNodeType(type);
    setInputValue(""); // Reset input
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      AddNode(inputValue.trim(), fileData.id, nodeType);
      setShowInput(false);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Folder/File row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          cursor: "pointer",
        }}
      >
        <div
          onClick={toggleVisibility}
          style={{ display: "flex", gap: 5, flex: 1 }}
        >
          <div>{isFolder ? (isVisible ? "📁" : "📂") : "📄"}</div>
          <div>{fileData.name}</div>
        </div>

        {isFolder && (
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={(e) => showAddInput(e, "folder")}
              style={{ padding: "2px 8px", fontSize: "12px" }}
            >
              + Folder
            </button>
            <button
              onClick={(e) => showAddInput(e, "file")}
              style={{ padding: "2px 8px", fontSize: "12px" }}
            >
              + File
            </button>
          </div>
        )}
      </div>

      {/* Input field */}
      {showInput && (
        <input
          autoFocus
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          onBlur={() => setShowInput(false)} // Click outside to cancel
          placeholder={nodeType === "folder" ? "Folder name" : "File name"}
          style={{
            marginLeft: "25px",
            marginTop: "5px",
            padding: "4px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      )}

      {/* Children */}
      {fileData.children &&
        isVisible &&
        fileData.children.map((child) => (
          <div key={child.id} style={{ marginLeft: "25px", marginTop: "5px" }}>
            <FileExplorer fileData={child} AddNode={AddNode} />
          </div>
        ))}
    </div>
  );
};

export default FileExplorer;
