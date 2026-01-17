import React, { useState } from "react";

interface Comment {
  id: number;
  userComment: string;
  reply: Comment[];
}

/* 🔁 Helper to insert reply in tree */
const addReplyToTree = (
  tree: Comment[],
  parentId: number,
  newReply: Comment
): Comment[] => {
  return tree.map((c) => {
    if (c.id === parentId) {
      return { ...c, reply: [...c.reply, newReply] };
    }

    return {
      ...c,
      reply: addReplyToTree(c.reply, parentId, newReply),
    };
  });
};

/* 🔁 Recursive Component */
const CommentItem = ({
  comment,
  addReply,
}: {
  comment: Comment;
  addReply: (parentId: number, text: string) => void;
}) => {
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    addReply(comment.id, replyText);
    setReplyText("");
    setShowReply(false);
  };

  return (
    <div style={{ marginLeft: 20, marginTop: 10 }}>
      <div className="flex gap-2 items-center">
        👉 {comment.userComment}
        <button onClick={() => setShowReply(!showReply)}>Reply</button>
      </div>

      {showReply && (
        <div className="flex gap-2 mt-1">
          <input
            className="border"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button onClick={handleReply}>Post</button>
        </div>
      )}

      {comment.reply.map((r) => (
        <CommentItem key={r.id} comment={r} addReply={addReply} />
      ))}
    </div>
  );
};

/* 🧠 Main Component */
const Comments = () => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  const addComment = () => {
    const newComment: Comment = {
      id: Date.now(),
      userComment: commentText,
      reply: [],
    };

    setComments([...comments, newComment]);
    setCommentText("");
  };

  const addReply = (parentId: number, text: string) => {
    const newReply: Comment = {
      id: Date.now(),
      userComment: text,
      reply: [],
    };

    setComments(addReplyToTree(comments, parentId, newReply));
  };

  return (
    <div>
      <h3>Add Comment</h3>

      <input
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className="border"
      />
      <button onClick={addComment}>Post</button>

      <hr />

      {comments.map((c) => (
        <CommentItem key={c.id} comment={c} addReply={addReply} />
      ))}
    </div>
  );
};

export default Comments;
