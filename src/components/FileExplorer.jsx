import React, { useState } from "react";
import FileExplorerChild from "./FileExplorerChild";

export const fileExplorerData = {
  id: "root",
  name: "root",
  type: "folder",
  children: [
    {
      id: "1",
      name: "src",
      type: "folder",
      children: [
        {
          id: "1-1",
          name: "components",
          type: "folder",
          children: [
            {
              id: "1-1-1",
              name: "Button.jsx",
              type: "file",
            },
            {
              id: "1-1-2",
              name: "Modal.jsx",
              type: "file",
            },
          ],
        },
        {
          id: "1-2",
          name: "pages",
          type: "folder",
          children: [
            {
              id: "1-2-1",
              name: "Home.jsx",
              type: "file",
            },
            {
              id: "1-2-2",
              name: "About.jsx",
              type: "file",
            },
          ],
        },
        {
          id: "1-3",
          name: "App.jsx",
          type: "file",
        },
        {
          id: "1-4",
          name: "index.js",
          type: "file",
        },
      ],
    },
    {
      id: "2",
      name: "public",
      type: "folder",
      children: [
        {
          id: "2-1",
          name: "index.html",
          type: "file",
        },
      ],
    },
    {
      id: "3",
      name: "package.json",
      type: "file",
    },
    {
      id: "4",
      name: "README.md",
      type: "file",
    },
  ],
};

const FileExplorer = () => {
  const [fileData, setFileData] = useState(fileExplorerData);

  const AddNode = (text, id, type) => {
    const newNode = {
      id: Date.now(),
      name: text,
      type: type,
    };

    return setFileData((prev) => insertNode(prev, id, newNode));
  };

  const insertNode = (tree, parentId, newNode) => {
    if (tree.id === parentId) {
      return { ...tree, children: [...tree.children, newNode] };
    }

    if (!tree.children) return tree;

    return {
      ...tree,
      children: tree.children.map((item) => {
        return insertNode(item, parentId, newNode);
      }),
    };
  };
  return (
    <div className="w-full flex flex-col justify-center items-center h-full">
      <h3>File Explorer</h3>
      <FileExplorerChild AddNode={AddNode} fileData={fileData} />
    </div>
  );
};

export default FileExplorer;
