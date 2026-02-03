import React, { useState } from "react";
import EXplorerRecursive2 from "./EXplorerRecursive2";

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
            { id: "1-1-1", name: "Button.jsx", type: "file" },
            { id: "1-1-2", name: "Modal.jsx", type: "file" },
          ],
        },
        {
          id: "1-2",
          name: "pages",
          type: "folder",
          children: [
            { id: "1-2-1", name: "Home.jsx", type: "file" },
            { id: "1-2-2", name: "About.jsx", type: "file" },
          ],
        },
        { id: "1-3", name: "App.jsx", type: "file" },
        { id: "1-4", name: "index.js", type: "file" },
      ],
    },
    {
      id: "2",
      name: "public",
      type: "folder",
      children: [{ id: "2-1", name: "index.html", type: "file" }],
    },
    { id: "3", name: "package.json", type: "file" },
    { id: "4", name: "README.md", type: "file" },
  ],
};

const Explorer2 = () => {
  const [explorerData, setExplorerData] = useState(fileExplorerData);

  const AddNode = (id, name, type, parentId) => {
    const newNode = {
      id,
      name,
      type,
      ...(type === "folder" ? { children: [] } : {}),
    };

    console.log(newNode);
    // setExplorerData((prev) => (prev, newNode));

    setExplorerData((prev) => insertNode(prev, newNode, parentId));

    // return insertNode(explorerData, newNode, parentId);
  };

  const insertNode = (tree, newNode, parentId) => {
    if (tree.id === parentId && tree.type === "folder") {
      return { ...tree, children: [...tree.children, newNode] };
    }

    if (!tree.children) return tree;

    return {
      ...tree,
      children: tree.children.map((items) => {
        return insertNode(items, newNode, parentId);
      }),
    };
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h3>File Explorer</h3>
      <EXplorerRecursive2 AddNode={AddNode} explorerData={explorerData} />
    </div>
  );
};

export default Explorer2;
