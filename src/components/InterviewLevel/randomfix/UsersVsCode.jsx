import React, { useState } from "react";
const explorerData = [
  {
    id: 1,
    name: "src",
    type: "folder",
    children: [
      {
        id: 2,
        name: "components",
        type: "folder",
        children: [
          {
            id: 3,
            name: "Sidebar.jsx",
            type: "file",
          },
          {
            id: 4,
            name: "Navbar.jsx",
            type: "file",
          },
        ],
      },
      {
        id: 5,
        name: "App.jsx",
        type: "file",
      },
      {
        id: 6,
        name: "utils",
        type: "folder",
        children: [
          {
            id: 7,
            name: "helpers.js",
            type: "file",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "package.json",
    type: "file",
  },
  {
    id: 9,
    name: "public",
    type: "folder",
    children: [
      {
        id: 10,
        name: "index.html",
        type: "file",
      },
    ],
  },
];

const UsersVsCode = () => {
  const [EditorData, setEditorData] = useState(explorerData);

  const onAdd = (parentId, type, inputVal) => {
    // console.log("type", type);
    const newItem = {
      id: Date.now(),
      name: inputVal,
      type: type,
      children: [],
    };

    return setEditorData(insertNode(EditorData, parentId, newItem));
  };

  const insertNode = (EditorData, parentId, newItem) => {
    const updatedArray = EditorData.map((item) => {
      if (item.id === parentId) {
        return { ...item, children: [...item.children, newItem] };
      }

      if (item.children) {
        return {
          ...item,
          children: insertNode(item.children, parentId, newItem),
        };
      } else return item;
    });

    return updatedArray;
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full h-full">
      <h3>File Explorer</h3>
      {EditorData.map((explorerDataItem) => {
        return (
          <ExplorerChild onAdd={onAdd} explorerDataItem={explorerDataItem} />
        );
      })}
    </div>
  );
};

export default UsersVsCode;

const ExplorerChild = ({ explorerDataItem, onAdd }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const isFolder = explorerDataItem.type === "folder";

  const handleAdd = (parentId, type) => {
    console.log(parentId);
    console.log(type);
    onAdd(parentId, type, inputVal);
  };

  return (
    <div className="flex justify-center gap-5 flex-col pl-2 items-center">
      <div className="flex gap-3">
        <div className="flex gap-2">
          <button
            onClick={() => {
              setShowInput(!showInput);
            }}
          >
            {!isFolder ? "📂" : "🗂️"}
          </button>
          <div>{explorerDataItem.name}</div>
        </div>
        {isFolder && (
          <button onClick={() => setIsExpanded(!isExpanded)}>{">"}</button>
        )}
      </div>

      {showInput && (
        <div className="flex gap-3">
          <input
            onChange={(e) => setInputVal(e.target.value)}
            className="border"
          />
          <div className="flex gap-2">
            <button
              onClick={() => handleAdd(explorerDataItem.id, "folder")}
              className="border px-2"
            >
              Add Folder
            </button>
            <button
              onClick={() => handleAdd(explorerDataItem.id, "file")}
              className="border px-2"
            >
              {" "}
              Add File
            </button>
          </div>
        </div>
      )}

      <div>
        {explorerDataItem.children &&
          isExpanded &&
          explorerDataItem.children.map((childItem) => {
            return <ExplorerChild onAdd={onAdd} explorerDataItem={childItem} />;
          })}
      </div>
    </div>
  );
};
