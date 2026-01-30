import React, { useState } from "react";
import CommentSec from "./CommentSec";
const initialComments = [
  {
    id: 1,
    text: "This is a great post!",
    replies: [
      {
        id: 2,
        text: "Totally agree 👍",
        replies: [],
      },
    ],
  },
  {
    id: 3,
    text: "Thanks for sharing!",
    replies: [],
  },
];

type CommentType = {
  id: number;
  text: string;
  replies: CommentType[];
};

const NestedCommentSec = () => {
  const [comments, setComments] = useState<CommentType[]>(initialComments);
  const [inputVal, setInputVald] = useState("");

  const addReply = (id, replytext) => {
    const updateNode = (nodes) => {
      nodes.map((node) => {
        if (node.id === id) {
          setComments([
            ...comments,
            { id: Date.now(), text: replytext, replies: [] },
          ]);
        }
      });
    };
  };

  const handleAdd = () => {
    setComments([
      ...comments,
      {
        id: Date.now(),
        text: inputVal,
        replies: [],
      },
    ]);
  };
  return (
    <div className="w-full h-full flex-col flex justify-center items-center">
      <h3>Nested Commnets</h3>
      <input
        onChange={(e) => setInputVald(e.target.value)}
        className="border-2"
      />
      <button onClick={handleAdd}>Add</button>
      {comments.map((comment) => {
        return <CommentSec addReply={addReply} comment={comment} />;
      })}
    </div>
  );
};

export default NestedCommentSec;
