import React, { useState } from "react";

const CheckboxesData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];

const SwiggyNestedChecbox = () => {
  const [checkedState, setCheckedState] = useState({});
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-full w-full">
      <h3>Input Checkbox</h3>
      {CheckboxesData.map((nodeData) => {
        return (
          <ChildSwiggyRecursive
            setCheckedState={setCheckedState}
            checkedState={checkedState}
            node={nodeData}
          />
        );
      })}
    </div>
  );
};

export default SwiggyNestedChecbox;

const ChildSwiggyRecursive = ({ node, setCheckedState, checkedState }) => {
  const isChecked = checkedState[node.id] ?? false;

  const toggleNode = (isChecked, node) => {
    setCheckedState((prev) => {
      const newState = { ...prev };
      newState[node.id] = isChecked;

      //   saare children ki id nikaalo

      const getAllChildren = (node) => {
        let ids = [];
        if (node.children) {
          node.children.forEach((items) => {
            ids.push(items.id);
            ids = ids.concat(getAllChildren(items));
          });
        }

        return ids;
      };

      const idsChild = getAllChildren(node);
      idsChild.forEach((items) => {
        newState[items] = isChecked;
      });

      return newState;
    });
  };

  console.log(checkedState);
  return (
    <div>
      <label className="flex gap-2">
        <input
          onChange={(e) => toggleNode(e.target.checked, node)}
          checked={isChecked}
          type="checkbox"
        />
        {node.label}
      </label>

      {node.children &&
        node.children.map((nodeItem) => {
          return (
            <div className="pl-5">
              <ChildSwiggyRecursive
                setCheckedState={setCheckedState}
                checkedState={checkedState}
                node={nodeItem}
              />
            </div>
          );
        })}
    </div>
  );
};
