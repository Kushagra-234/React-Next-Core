import React from "react";

const CommentInput = ({ data, comments, setComments, commentVal, setCommentVal }) => {

    const addReply = (nodes, parentId, newReply) => {
        return nodes.map((node) => {
          if (node.id === parentId) {
            return {
              ...node,
              replies: [...node.replies, newReply],
            };
          }
      
          return {
            ...node,
            replies: addReply(node.replies, parentId, newReply),
          };
        });
      };
      
    const handleReply = () => {
      const newComment = {
        id: Date.now(),
        username: "you",
        text: commentVal[data.id],
        replies: [],
      };
  
      const updated = addReply(comments, data.id, newComment);
      setComments(updated);
  
      setCommentVal({ ...commentVal, [data.id]: "" });
    };
  
    return (
      <div style={{ marginLeft: 20 }}>
        <div>
          <b>{data.username}</b>: {data.text}
        </div>
  
        <input
          value={commentVal[data.id] || ""}
          onChange={(e) =>
            setCommentVal({ ...commentVal, [data.id]: e.target.value })
          }
          placeholder="Reply..."
        />
  
        <button onClick={handleReply}>Reply</button>
  
        {data.replies.map((child) => (
          <CommentInput
            key={child.id}
            data={child}
            comments={comments}
            setComments={setComments}
            commentVal={commentVal}
            setCommentVal={setCommentVal}
          />
        ))}
      </div>
    );
  };
  

  export default CommentInput