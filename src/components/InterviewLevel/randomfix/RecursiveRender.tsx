import React, { useState } from "react";

const RecursiveRender = () => {
  const commentsData = [
    {
      id: 1,
      text: "Nice",
      replies: [
        { id: 2, text: "Thanks", replies: [] },
        { id: 3, text: "🔥", replies: [{ id: 4, text: "lol", replies: [] }] },
      ],
    },
  ];

  const [comment, setComments] = useState(commentsData);
  const [inputVal, setInputVal] = useState("");

  const handleAdd = () => {
    const newComment = {
      id: Date.now(),
      text: inputVal,
      replies: [],
    };

    setComments((prev) => [...prev, newComment]);
    setInputVal("");
  };

  const AddReply = (parentId, replyText) => {
    const newReply = {
      id: Date.now(),
      text: replyText,
      replies: [],
    };

    return setComments(insertNode(comment, parentId, newReply));
  };

  const insertNode = (commentTree, parentId, newReply) => {
    return commentTree.map((commentItem) => {
      if (commentItem.id === parentId) {
        return { ...commentItem, replies: [...commentItem.replies, newReply] };
      }

      if (!commentItem.replies?.length) return commentItem; // base stop

      return {
        ...commentItem,
        replies: insertNode(commentItem.replies, parentId, newReply),
      };
    });
  };

  const deleteKey = (comment, parentId) => {
    const updatedArray = [...comment];

    const filteredArr = updatedArray.filter((item) => {
      return item.id !== parentId;
    });

    if (updatedArray?.replies) {
      deleteKey(comment.replies, parentId);
    }

    setComments(filteredArr);
  };

  return (
    <div className="flex flex-col gap-3 w-full h-full justify-center items-center">
      <h3>Reddit Comment System</h3>
      <div className="flex gap-4">
        <input
          onChange={(e) => setInputVal(e.target.value)}
          className="border-2"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {comment.map((commentItem) => {
        return (
          <RecursiveRenderChild
            deleteKey={deleteKey}
            AddReply={AddReply}
            commentVal={commentItem}
          />
        );
      })}
    </div>
  );
};

export default RecursiveRender;

const RecursiveRenderChild = ({ commentVal, AddReply, deleteKey }) => {
  const [showInput, setShowInput] = useState(false);
  const [replyVal, setReplyVal] = useState("");

  const handleKeyDown = (e, id) => {
    if (e.key === "Enter" && replyVal) {
      AddReply(id, replyVal);
      setReplyVal("");
      setShowInput(false);
    }
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center gap-3">
        <div>{commentVal.text}</div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowInput(!showInput)}
            className="border-2 cursor-pointer px-4"
          >
            Add Reply
          </button>
          <button
            onClick={() => deleteKey(commentVal.id)}
            className="cursor-pointer border-2 px-4"
          >
            Delete
          </button>
        </div>
      </div>

      {showInput && (
        <input
          onChange={(e) => setReplyVal(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, commentVal.id)}
          className="border-2"
        />
      )}

      {commentVal.replies &&
        commentVal.replies.map((replyVal) => {
          return (
            <RecursiveRenderChild
              deleteKey={deleteKey}
              AddReply={AddReply}
              commentVal={replyVal}
            />
          );
        })}
    </div>
  );
};

export { RecursiveRenderChild };
