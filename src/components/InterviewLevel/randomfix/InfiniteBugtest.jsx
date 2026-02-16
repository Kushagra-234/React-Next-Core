import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUsers(data.users);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.firstName}</p>
      ))}
    </div>
  );
}

const comments = [
  {
    id: 1,
    text: "Hello",
    replies: [
      {
        id: 2,
        text: "Reply 1",
        replies: [],
      },
    ],
  },
];

const addReply = (comments, commentId, replyText) => {
  return comments.map((item) => {
    if (item.id === commentId) {
      return {
        ...item,
        replies: [...item.replies, replyText],
      };
    }

    return {
      ...node,
      replies: addReply(node.replies, commentId, replyText),
    };
  });
};

const Button = ({
  label,
  variant = "primary",
  disabled = false,
  isLoading = false,
}) => {
  const className = `btn btn-${variant} ${
    disabled || isLoading ? "btn-disabled" : ""
  }`;
  return <button className={className}>{label}</button>;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return <button onClick={increment}>{count}</button>;
};
