import React, { useState } from "react";

export const users = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@gmail.com`,
}));

const PaginationSec = () => {
  const [curPage, setPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);
  const data = users.slice(0, curPage * ITEMS_PER_PAGE);

  const handleScroll = (e) => {
    const { scrollHeight, clientHeight, scrollTop } = e.target;

    if (scrollTop + clientHeight >= scrollHeight - 50 && curPage < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div
      onScroll={handleScroll}
      className="border-2 w-full h-[200px] overflow-y-auto p-2"
    >
      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      {curPage <= totalPages && <div>Load moew </div>}
    </div>
  );
};

export default PaginationSec;
