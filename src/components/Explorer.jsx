import React, { useState } from "react";
import ExplorerRecursive from "./ExplorerRecursive";

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

const Explorer = () => {
  const [explorerData, setExplorerData] = useState(fileExplorerData);

  const AddNode = (folderId, inputVal, id, type) => {
    const newNode = {
      id: id,
      name: inputVal,
      type: type,
      ...(type === "folder" ? { children: [] } : {}),
    };

    setExplorerData((prev) => insertNode(prev, folderId, newNode));
  };

  const insertNode = (tree, folderId, newNode) => {
    if (tree.id === folderId && tree.type === "folder") {
      return {
        ...tree,
        children: [...tree.children, newNode],
      };
    }

    if (!tree.children) return tree;

    return {
      ...tree,
      children: tree.children.map((items) => {
        return insertNode(items, folderId, newNode);
      }),
    };
  };
  return (
    <div className="flex w-full flex-col h-full justify-center items-center">
      <h3>File Explorer</h3>
      <div>
        <ExplorerRecursive AddNode={AddNode} explorerData={explorerData} />
      </div>
    </div>
  );
};

export default Explorer;
