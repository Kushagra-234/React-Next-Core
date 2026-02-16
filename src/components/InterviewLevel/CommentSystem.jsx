import React, { useEffect, useState } from "react";

const commentsData = [
  {
    id: 1,
    commentText: "Nice post 🔥",
    replies: [
      {
        id: 2,
        commentText: "Thanks bro!",
        replies: [
          {
            id: 3,
            userId: "u3",
            commentText: "Wholesome thread 😂",
            replies: [],
          },
        ],
      },
    ],
  },
];

const CommentSystem = () => {
  const [comment, setComment] = useState(commentsData);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    console.log(comment, "comment");
  }, [comment]);

  const handleClick = () => {
    const newComment = {
      id: Date.now(),
      commentText: inputVal,
      replies: [],
    };
    setComment([...comment, newComment]);
    setInputVal("");
  };

  const AddReply = (replytext, commentId) => {
    const newReply = {
      id: Date.now(),
      commentText: replytext,
      replies: [],
    };

    return setComment(insertNode(comment, commentId, newReply));
  };

  const insertNode = (comment, commentId, newReply) => {
    // comment ek array hai
    return comment.map((node) => {
      if (node.id === commentId) {
        return { ...node, replies: [...node.replies, newReply] };
      }

      if (node.replies && node.replies.length > 0) {
        return {
          ...node,
          replies: insertNode(node.replies, commentId, newReply),
        };
      }

      return node;
    });
  };

  return (
    <div className="flex justify-center items-center h-full w-full flex-col gap-3">
      <h3>Comment System</h3>
      <div className="flex gap-4">
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="border-2"
        />
        <button onClick={handleClick}>Add</button>
      </div>
      {comment.map((commentData) => {
        return (
          <CommentInputNew
            AddReply={AddReply}
            key={commentData.id}
            comment={commentData}
          />
        );
      })}
    </div>
  );
};

export default CommentSystem;

const CommentInputNew = ({ comment, AddReply }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleAddReply = (commentId) => {
    // add reply kya kya lega ek to parent ki id , inputValue
    if (!replyText) return;
    console.log("pressed");
    AddReply(replyText, commentId);
  };

  return (
    <div className="flex  flex-col gap-4">
      <div className="flex gap-3">
        <div>{comment.commentText}</div>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="cursor-pointer"
        >
          Reply
        </button>
      </div>

      {isVisible && (
        <div className="flex gap-3">
          <input
            onChange={(e) => setReplyText(e.target.value)}
            className="border-2"
          />
          <button onClick={() => handleAddReply(comment.id)}>Add Reply</button>
        </div>
      )}

      {comment.replies &&
        comment.replies.map((repliesData) => {
          return (
            <div key={repliesData.id} className="">
              <CommentInputNew AddReply={AddReply} comment={repliesData} />{" "}
            </div>
          );
        })}
    </div>
  );
};

// item=[
//     {id:1,name:"",age:10},
//     {}
// ]

// // /
// //  {
// const response =byids:{
//     id:{},
//     id:[]
// }

// const allids=["p1","p2"]


// const data =response[id]


// 1- virtualization
// 2- memoization using createSelector ye memoize krta hai returned values like filter and all pe 
// 3- normazliation of response object kyuki abhi O(N) me ho rha hai fir O(1) me hogaa baad me 


// Why shouldn’t we mutate state directly?
