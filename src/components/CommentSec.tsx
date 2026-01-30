import React, { useState } from "react";

const CommentSec = ({ comment, addReply }) => {
  const [replyState, setReplyState] = useState(false);
  const [replyText, setReplyText] = useState("");
  return (
    <div className="flex gap-4 ">
      {comment.text}
      <button onClick={() => setReplyState(true)}>Reply</button>
      {replyState && (
        <div className="flex gap-3">
          {" "}
          <input
            onChange={(e) => setReplyText(e.target.value)}
            className="border-2"
          />
          <button onClick={()=>addReply(comment.id,replyText)}>Add</button>
        </div>
      )}
    </div>
  );
};

export default CommentSec;
