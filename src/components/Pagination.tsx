import React, { useState } from "react";

const data = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
  "Item 19",
  "Item 20",
  "Item 21",
  "Item 22",
  "Item 23",
  "Item 24",
  "Item 25",
  "Item 26",
  "Item 27",
  "Item 28",
  "Item 29",
  "Item 30",
];

const Paginated = () => {
  const [curPage, setCurPage] = useState(1);
  const itemsPerpage = 5;
  const start = (curPage - 1) * itemsPerpage;
  const end = itemsPerpage + start;
  const newData = data.slice(start, end);
  const totalPage = data.length / itemsPerpage;
  return (
    <div className="w-full flex flex-col">
      <div>
        {newData.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
      <div className="flex gap-2">
        <button
          className={curPage === totalPage ? "opacity-30" : "bg-white"}
          disabled={curPage === totalPage}
          onClick={() => setCurPage(curPage + 1)}
        >
          Next
        </button>
        <button
          className={curPage === 1 ? "opacity-20" : "bg-white"}
          disabled={curPage === 1}
          onClick={() => setCurPage(curPage - 1)}
        >
          Previous
        </button>
      </div>
    </div>
  );
};

export default Paginated;
