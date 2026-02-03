import React, { useState } from "react";
import Comments3Input from "./Comments3Input";

export const commentsData = [
  {
    id: "1",
    text: "This is the first comment",
    author: "Aman",
    replies: [
      {
        id: "1-1",
        text: "This is a reply to first comment",
        author: "Rohit",
        replies: [],
      },
      {
        id: "1-2",
        text: "Another reply",
        author: "Neha",
        replies: [
          {
            id: "1-2-1",
            text: "Nested reply",
            author: "Kunal",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    text: "Second top-level comment",
    author: "Priya",
    replies: [],
  },
];

const Comments3 = () => {
  const [comment, setComment] = useState(commentsData);
  const [inputVal, setInputVal] = useState("");

  const handleClick = () => {
    const newComment = {
      id: Date.now(),
      text: inputVal,
      author: "kushagra",
      replies: [],
    };
    setComment([...comment, newComment]);
  };

  const AddNode = (commentId, text) => {
    const newReply = {
      id: Date.now(),
      text: text,
      author: "kushagra",
      replies: [],
    };

    setComment((prev) => insertNode(prev, commentId, newReply));
  };

  const insertNode = (commentTree, commentId, newReply) => {
    return commentTree.map((comment) => {
      if (comment.id === commentId)
        return { ...comment, replies: [...comment.replies, newReply] };

      if (comment.replies.length > 0) {
        return {
          ...comment,
          replies: insertNode(comment.replies, commentId, newReply),
        };
      }

      return comment;
    });
  };
  return (
    <div className="flex flex-col gap-7 h-full justify-center items-center ">
      <h3>Comment-Reply</h3>
      <div className="flex gap-2">
        <input
          className="border-2"
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={() => handleClick()}>Add Comment</button>
      </div>

      {comment.map((CommentData) => {
        return <Comments3Input AddNode={AddNode} comment={CommentData} />;
      })}
    </div>
  );
};

export default Comments3;
