import React, { useState } from "react";
import CommentInput from "./CommentInput";

export const commentsData = [
  {
    id: 1,
    username: "rahul_23",
    text: "This post is 🔥🔥",
    replies: [
      {
        id: 2,
        username: "amit_dev",
        text: "True bro, quality content",
        replies: [
          {
            id: 3,
            username: "neha.codes",
            text: "Agree 💯",
            replies: [],
          },
        ],
      },
      {
        id: 4,
        username: "rohit_ui",
        text: "Loved the explanation",
        replies: [],
      },
    ],
  },
  {
    id: 5,
    username: "simran.design",
    text: "Can you make a part 2?",
    replies: [
      {
        id: 6,
        username: "author",
        text: "Yes coming soon 😄",
        replies: [],
      },
    ],
  },
];
// yaha data ka obejct {
// id:number,
// username:"string",
// replies:[]
// }

const CommentTree = () => {
  const [commentVal, setCommentVal] = useState({});
  return (
    <div>
      {commentsData.map((node) => {
        return (
          <CommentInput
            data={node}
            commentVal={commentVal}
            setCommentVal={setCommentVal}
          />
        );
      })}
    </div>
  );
};

export default CommentTree;
