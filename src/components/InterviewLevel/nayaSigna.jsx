import FileExplorer from "./FIleexplorerSwig";
// import "./styles.css";
// import FileExplorer from "./FileExplorer";
import { useState } from "react";
// impoer FileExplorer

const fileExplorerData = {
  id: "root",
  name: "root",
  type: "folder",
  children: [
    {
      id: "src",
      name: "src",
      type: "folder",
      children: [
        {
          id: "src-components",
          name: "components",
          type: "folder",
          children: [
            { id: "btn", name: "Button.tsx", type: "file" },
            { id: "modal", name: "Modal.tsx", type: "file" },
            { id: "navbar", name: "Navbar.tsx", type: "file" },
          ],
        },
        {
          id: "src-pages",
          name: "pages",
          type: "folder",
          children: [
            { id: "home", name: "Home.tsx", type: "file" },
            { id: "about", name: "About.tsx", type: "file" },
          ],
        },
        {
          id: "src-utils",
          name: "utils",
          type: "folder",
          children: [
            { id: "format", name: "formatDate.ts", type: "file" },
            { id: "api", name: "api.ts", type: "file" },
          ],
        },
      ],
    },
    {
      id: "public",
      name: "public",
      type: "folder",
      children: [
        { id: "index", name: "index.html", type: "file" },
        { id: "favicon", name: "favicon.ico", type: "file" },
      ],
    },
    {
      id: "cfg",
      name: "config",
      type: "folder",
      children: [
        { id: "eslint", name: ".eslintrc.json", type: "file" },
        { id: "ts", name: "tsconfig.json", type: "file" },
      ],
    },
    { id: "readme", name: "README.md", type: "file" },
    { id: "pkg", name: "package.json", type: "file" },
  ],
};

export default function NayaSwig() {
  const [fileData, setFileData] = useState(fileExplorerData);

  const AddNode = (text, id, type) => {
    const newNode = {
      id: Date.now(),
      name: text,
      type: type,
      ...(type === "folder" ? { children: [] } : {}),
    };

    return setFileData((prev) => insertNode(prev, id, newNode));
  };

  const insertNode = (tree, parentId, newNode) => {
    if (parentId === tree.id && tree.type === "folder")
      return { ...tree, children: [...(tree.children || []), newNode] };

    if (!tree.children) return tree;

    return {
      ...tree,
      children:
        tree.children &&
        tree.children.map((newTree) => {
          return insertNode(newTree, parentId, newNode);
        }),
    };
  };
  return (
    <div className="flex flex-col">
      <h3>File Explorer</h3>
      <FileExplorer AddNode={AddNode} fileData={fileData} />
    </div>
  );
}

setTree((prev) => ({
  ...prev,
  children: [...prev.children, newNode],
}));

setTree((prev) => ({
  ...prev,
  children: [...prev.children, newNode],
}));

setTree((prev) => ({
    ...prev,
  children: { ...prev.children, newNode },
}));


const [formData,setFormData]=useState({
    name:"",
    email:""
})


setFormData({...formData,name:"kushagra"})


// with {{name:"kush",email:""},{name:"ksuhagra"}} 
