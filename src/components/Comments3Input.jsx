import React, { useState } from "react";

const Comments3Input = ({ comment,AddNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [inputReplyVal, setInputReplyVal] = useState("");

  const handleClick =(id)=>{
    AddNode(id,inputReplyVal)
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div>{comment.text}</div>
        <button onClick={() => setIsVisible(!isVisible)}>Add Reply</button>
      </div>

      {isVisible && (
        <div className="flex gap-3">
          <input
            onChange={(e) => setInputReplyVal(e.target.value)}
            className="border-2"
          />
          <button onClick={()=>handleClick(comment.id)}>Add </button>
        </div>
      )}

      {comment.replies &&
        comment.replies.map((commentReplies) => {
          return <Comments3Input AddNode={AddNode} comment={commentReplies} />;
        })}
    </div>
  );
};

export default Comments3Input;
