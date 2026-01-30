import React from "react";
import ChildNested from "./ChildNested";
// impoer ChildNested

const comments = [
  {
    id: 1,
    author: "Aman",
    text: "This is a great post!",
    replies: [
      {
        id: 2,
        author: "Rohit",
        text: "Totally agree 👍",
        replies: [
          {
            id: 3,
            author: "Neha",
            text: "Same here!",
            replies: [],
          },
        ],
      },
      {
        id: 4,
        author: "Kunal",
        text: "Can you explain this part more?",
        replies: [],
      },
    ],
  },
  {
    id: 5,
    author: "Priya",
    text: "Thanks for sharing!",
    replies: [
      {
        id: 6,
        author: "Aman",
        text: "You're welcome 🙂",
        replies: [],
      },
    ],
  },
];

const Nested = () => {
  return (
    <div className="w-full justify-center items-center h-full">
      <h3>Nested</h3>
      {comments.map((node) => {
        return <ChildNested node={node} />;
      })}
    </div>
  );
};

export default Nested;
