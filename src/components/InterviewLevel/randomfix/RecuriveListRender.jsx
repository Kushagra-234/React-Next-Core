import React, { useState } from "react";

export const documentRender = [
  {
    id: "node_1",
    type: "heading",
    attrs: { level: 1 },
    children: [
      {
        id: "node_2",
        type: "text",
        value: "This is the primary heading for our document",
      },
    ],
  },
  {
    id: "node_3",
    type: "heading",
    attrs: { level: 2 },
    children: [
      {
        id: "node_4",
        type: "text",
        value: "Here is some accompanying info we render below",
      },
    ],
  },
  {
    id: "node_5",
    type: "unordered-list",
    children: [
      {
        id: "node_6",
        type: "list-item",
        children: [
          {
            id: "node_7",
            type: "text",
            value: "First unordered item",
          },
        ],
      },
      {
        id: "node_8",
        type: "list-item",
        children: [
          {
            id: "node_9",
            type: "text",
            value: "Second unordered item",
          },
        ],
      },
    ],
  },
  {
    id: "node_10",
    type: "ordered-list",
    children: [
      {
        id: "node_11",
        type: "list-item",
        children: [
          {
            id: "node_12",
            type: "text",
            value: "First ordered item",
          },
        ],
      },
      {
        id: "node_13",
        type: "list-item",
        children: [
          {
            id: "node_14",
            type: "text",
            value: "Second ordered item",
          },
        ],
      },
    ],
  },
  {
    id: "node_15",
    type: "image",
    attrs: {
      src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      alt: "Sample Image",
    },
  },
];

const RecuriveListRender = () => {
  const [documentData] = useState(documentRender);

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <h3>Recursive Render</h3>
      {documentData.map((documentValRender) => (
        <RecursiveChildrenRender
          key={documentValRender.id}
          parent={null}
          data={documentValRender}
        />
      ))}
    </div>
  );
};

export default RecuriveListRender;

const RecursiveChildrenRender = ({ data, parent }) => {
  switch (data.type) {
    case "heading": {
      const Tag = `h${data?.attrs?.level || 1}`;
      return (
        <Tag>
          {data.children?.map((childItem) => (
            <RecursiveChildrenRender
              key={childItem.id}
              data={childItem}
              parent={data}
            />
          ))}
        </Tag>
      );
    }

    case "text":
      return <>{data.value}</>;

    case "unordered-list":
      return (
        <ul>
          {data.children?.map((childItem) => (
            <RecursiveChildrenRender
              key={childItem.id}
              data={childItem}
              parent={data}
            />
          ))}
        </ul>
      );

    case "ordered-list":
      return (
        <ol>
          {data.children?.map((childItem) => (
            <RecursiveChildrenRender
              key={childItem.id}
              data={childItem}
              parent={data}
            />
          ))}
        </ol>
      );

    case "list-item":
      return (
        <li>
          {data.children?.map((childItem) => (
            <RecursiveChildrenRender
              key={childItem.id}
              data={childItem}
              parent={data}
            />
          ))}
        </li>
      );

    case "image":
      return <img src={data?.attrs?.src} alt={data?.attrs?.alt} width="200" />;

    default:
      return null;
  }
};
